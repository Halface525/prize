/**
 * 七大领域 + 特别奖。
 *
 * 领域是章程级设置（见章程第十四、十五条），非经章程修改程序不得增减。
 * 具体奖项不设限制（第十六条），由委员会每期自由创设，创设后入库。
 *
 * 领域的划分依据三条：穷尽性（任何事都能落进去）、互斥性（不重叠）、
 * 抗过时性（一百年后这个领域还成立）。所以领域按「人生的基本维度」切，
 * 不按「当下的话题」切——「AI」不是领域，「非人」才是。
 *
 * 英文字段以 En 结尾，缺省时回退到中文字段（见 i18n 的 pick()）。
 */

export const domains = [
  {
    id: "body",
    index: "一",
    indexEn: "I",
    name: "身体",
    nameEn: "The Body",
    covers: "睡眠、饮食、运动、健康",
    coversEn: "Sleep, diet, exercise, health",
    note: "本领域所奖励者，皆为无需意志力即可达成之事。",
    noteEn: "Everything rewarded here can be achieved without willpower.",
  },
  {
    id: "mind",
    index: "二",
    indexEn: "II",
    name: "心智",
    nameEn: "The Mind",
    covers: "学习、记忆、注意、思考",
    coversEn: "Learning, memory, attention, thought",
    note: "本领域不奖励智力，仅奖励智力未被使用的情形。",
    noteEn: "Intelligence is not rewarded here; only the cases in which it went unused.",
  },
  {
    id: "labor",
    index: "三",
    indexEn: "III",
    name: "劳作",
    nameEn: "Labor",
    covers: "职业、工作、技能、工具使用",
    coversEn: "Occupation, work, craft, use of tools",
    note: "本领域不评价效率，仅记录一种工作方式被维持的时长。",
    noteEn: "Efficiency is not assessed here; only how long a way of working was maintained.",
  },
  {
    id: "relations",
    index: "四",
    indexEn: "IV",
    name: "关系",
    nameEn: "Relations",
    covers: "室友、朋友、家人、陌生人",
    coversEn: "Roommates, friends, family, strangers",
    note: "本领域所奖励者，多为未曾发生之事。",
    noteEn: "What is rewarded here is, mostly, what did not happen.",
  },
  {
    id: "expression",
    index: "五",
    indexEn: "V",
    name: "表达",
    nameEn: "Expression",
    covers: "说话、写作、发布、沉默",
    coversEn: "Speech, writing, publishing, silence",
    note: "沉默亦属表达。本领域同等对待二者。",
    noteEn: "Silence is expression too. This domain treats the two alike.",
  },
  {
    id: "objects",
    index: "六",
    indexEn: "VI",
    name: "器物",
    nameEn: "Objects",
    covers: "拥有、使用、耐久、丢失",
    coversEn: "Possession, use, endurance, loss",
    note: "本领域是本奖与既有各奖差别最大之处。诺贝尔奖从不颁给物件。",
    noteEn:
      "Here this prize differs most from the prizes that already exist. The Nobel Prize is never awarded to an object.",
  },
  {
    id: "nonhuman",
    index: "七",
    indexEn: "VII",
    name: "非人",
    nameEn: "The Non-Human",
    covers: "动物、植物、机器、人工智能",
    coversEn: "Animals, plants, machines, artificial intelligences",
    note: "既有各奖只颁给人。本领域颁给人以外的一切。",
    noteEn:
      "The prizes that already exist are given only to people. This domain is given to everything else.",
  },
  {
    id: "useless",
    index: "★",
    indexEn: "★",
    name: "无用",
    nameEn: "The Useless",
    covers: "无法归入前七个领域的一切",
    coversEn: "Anything that fits none of the seven domains above",
    note: "本领域存在的唯一理由，是让前七个领域可以永远不改。",
    noteEn:
      "The sole reason this domain exists is so that the seven above it never have to change.",
    special: true,
  },
];

/** 按 id 取领域 */
export function getDomain(id) {
  return domains.find((d) => d.id === id);
}
