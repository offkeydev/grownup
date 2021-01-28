export const generateReward = (quest, user) => {
    console.log(user)
    //DEFAULT VALUES
    const EXP = user.config.grown.exp
    console.log(EXP)
    const GOLD = user.config.grown.gold;
    console.log(GOLD)
    const questLength = quest.length
    const questTime = quest.map((item) => Number(item.taskTime))
    const time = questTime.reduce((a, b) => +a + (+b), 0)

    //EXP
    let exp = (EXP * questLength) *  (time / 100)
    exp = Math.round(exp)

    //GOLD
    let gold = (GOLD * questLength) *  (time / 100)
    gold = Math.round(gold)


    return { exp, gold }
}