import { Card, Progress, Statistic, Tag, Tooltip } from 'antd'
import { FireOutlined, ThunderboltOutlined } from '@ant-design/icons'
import type { KbjuResult as KbjuResultType } from './kbju.types'
import { GOAL_LABELS } from './kbju.utils'
import { PHASE_CONFIGS } from './cycle.data'
import styles from './KbjuResult.module.scss'

interface Props {
  result: KbjuResultType
}

const MACRO_CONFIG = {
  protein: { label: 'Белки',    color: '#1677ff', kcalPerG: 4 },
  fat:     { label: 'Жиры',     color: '#fa8c16', kcalPerG: 9 },
  carbs:   { label: 'Углеводы', color: '#52c41a', kcalPerG: 4 },
} as const

export function KbjuResult({ result }: Props) {
  const { bmr, tdee, goal, macros, cycleAdjustment } = result
  const phase = cycleAdjustment?.phase
  const phaseCfg = phase ? PHASE_CONFIGS[phase] : null

  const proteinPct = Math.round((macros.protein * 4 / macros.calories) * 100)
  const fatPct     = Math.round((macros.fat     * 9 / macros.calories) * 100)
  const carbsPct   = 100 - proteinPct - fatPct
  const pcts = { protein: proteinPct, fat: fatPct, carbs: carbsPct }

  return (
    <div className={styles.root}>

      {/* ── Бейджи цели + фазы ── */}
      <div className={styles.badges}>
        <Tag
          color={goal === 'lose' ? 'blue' : goal === 'gain' ? 'green' : 'default'}
          className={styles.goalTag}
        >
          {GOAL_LABELS[goal]}
        </Tag>
        {phaseCfg && (
          <Tag color={phaseCfg.tagColor} className={styles.goalTag}>
            {phaseCfg.emoji} {phaseCfg.label} · {phaseCfg.days}
          </Tag>
        )}
      </div>

      {/* ── Карточка фазы цикла ── */}
      {phaseCfg && cycleAdjustment && (
        <div
          className={styles.phaseCard}
          style={{ borderColor: phaseCfg.color, background: `${phaseCfg.color}09` }}
        >
          <div className={styles.phaseCardHeader}>
            <span className={styles.phaseEmoji}>{phaseCfg.emoji}</span>
            <div>
              <p className={styles.phaseCardTitle}>{phaseCfg.label} фаза</p>
              <p className={styles.phaseCardSub}>{phaseCfg.days} цикла</p>
            </div>
            <span
              className={styles.phaseDeltaBadge}
              style={{ background: phaseCfg.color }}
            >
              {cycleAdjustment.calorieDelta > 0
                ? `+${cycleAdjustment.calorieDelta}`
                : cycleAdjustment.calorieDelta}{' '}
              ккал к TDEE
            </span>
          </div>

          <div className={styles.phaseDetails}>
            <div className={styles.phaseColumn}>
              <p className={styles.phaseColumnTitle}>💡 Рекомендации</p>
              <ul className={styles.phaseList}>
                {phaseCfg.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className={styles.phaseColumn}>
              <p className={styles.phaseColumnTitle}>🥦 Полезные продукты</p>
              <div className={styles.foodTags}>
                {phaseCfg.foods.map((food) => (
                  <Tag key={food} style={{ borderColor: phaseCfg.color, color: phaseCfg.color }}>
                    {food}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Три стат-карточки ── */}
      <div className={styles.stats}>
        <Card className={styles.statCard} variant="borderless">
          <Statistic
            title="Базовый обмен (BMR)"
            value={bmr}
            suffix="ккал"
            prefix={<ThunderboltOutlined />}
          />
          <p className={styles.hint}>Калории в покое, без активности</p>
        </Card>

        <Card className={styles.statCard} variant="borderless">
          <Statistic
            title="Суточная норма (TDEE)"
            value={tdee}
            suffix="ккал"
            prefix={<FireOutlined style={{ color: '#fa8c16' }} />}
          />
          <p className={styles.hint}>
            {phaseCfg
              ? `С учётом активности · фаза ${cycleAdjustment!.calorieDelta > 0 ? '+' : ''}${cycleAdjustment!.calorieDelta} ккал`
              : 'С учётом вашей активности'}
          </p>
        </Card>

        <Card
          className={`${styles.statCard} ${styles.targetCard}`}
          variant="borderless"
        >
          <Statistic
            title="Цель — калории"
            value={macros.calories}
            suffix="ккал"
            valueStyle={{ color: '#1677ff', fontWeight: 700 }}
          />
          <p className={styles.hint}>Рекомендуемое потребление</p>
        </Card>
      </div>

      {/* ── Распределение КБЖУ ── */}
      <Card className={styles.macrosCard} title="Распределение КБЖУ">
        <div className={styles.progressBar}>
          {(['protein', 'fat', 'carbs'] as const).map((key) => (
            <Tooltip key={key} title={`${MACRO_CONFIG[key].label}: ${pcts[key]}%`}>
              <div
                className={styles.progressSegment}
                style={{ width: `${pcts[key]}%`, background: MACRO_CONFIG[key].color }}
              />
            </Tooltip>
          ))}
        </div>

        <div className={styles.macros}>
          {(['protein', 'fat', 'carbs'] as const).map((key) => {
            const cfg   = MACRO_CONFIG[key]
            const grams = macros[key]
            return (
              <div key={key} className={styles.macroItem}>
                <div className={styles.macroHeader}>
                  <span className={styles.macroDot} style={{ background: cfg.color }} />
                  <span className={styles.macroLabel}>{cfg.label}</span>
                  <span className={styles.macroPct}>{pcts[key]}%</span>
                </div>
                <div className={styles.macroValue}>{grams} г</div>
                <Progress
                  percent={pcts[key]}
                  showInfo={false}
                  strokeColor={cfg.color}
                  size="small"
                />
                <div className={styles.macroKcal}>{grams * cfg.kcalPerG} ккал</div>
              </div>
            )
          })}
        </div>
      </Card>

      <p className={styles.disclaimer}>
        * Расчёт по формуле Миффлина–Сан Жеора.
        {phaseCfg && ' Корректировка КБЖУ учитывает гормональные изменения фазы цикла.'}
        {' '}Результаты носят ориентировочный характер.
      </p>
    </div>
  )
}
