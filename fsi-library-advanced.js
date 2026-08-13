/* FSI 進階題庫 v4：B2–C1 句法、論證與精確口語 */
(function (global) {
    const pack = global.fsiPackSet;
    if (typeof pack !== 'function') {
        console.error('fsi-library-advanced.js needs fsi-library.js first');
        return;
    }

    const add = (meta, spec) => pack(meta, spec);

    const extra = [
        add({
            id: 'adv-it-is-x-that',
            title: '分裂句：It is + 焦點 + that',
            topic: '把真正要強調的部分提前',
            level: 'B2',
            source: 'fsi',
            corePattern: 'It is X that + clause',
            baseSentence: 'It is practice that builds fluency.',
            rhythm: 'it is PRAC-tice | that BUILDS | FLU-en-cy'
        }, {
            subs: [
                ['timing', 'It is timing that builds fluency.'],
                ['feedback', 'It is feedback that builds fluency.'],
                ['repetition', 'It is repetition that builds fluency.'],
                ['the first week', 'It is the first week that builds fluency.'],
                ['this method', 'It is this method that builds fluency.'],
                ['changes the result', 'It is practice that changes the result.'],
                ['causes the delay', 'It is practice that causes the delay.'],
                ['I disagree with', 'It is practice that I disagree with.'],
                ['we should keep', 'It is practice that we should keep.'],
                ['matters most', 'It is practice that matters most.'],
                ['It was the deadline', 'It was the deadline that changed the result.'],
                ['It is not money', 'It is not money that builds fluency.'],
                ['the wording', 'It is the wording that builds fluency.'],
                ['her question', 'It is her question that builds fluency.'],
                ['this assumption', 'It is this assumption that builds fluency.']
            ],
            shadows: ['it is TIM-ing | that BUILDS | FLU-en-cy', 'it is PRAC-tice | that MAT-ters | MOST', 'it is NOT MON-ey | that BUILDS | FLU-en-cy'],
            situation: ['有人把失敗全怪在詞彙量。你要糾正焦點。', 'It is practice that builds fluency.'],
            trans: [
                ['改成 What-cleft', 'What builds fluency is practice.'],
                ['改成否定焦點', 'It is not vocabulary that builds fluency.']
            ],
            resps: [
                ['Is vocabulary the key?', 'No. It is practice that builds fluency.'],
                ['What actually matters here?', 'It is practice that matters most.']
            ],
            exps: [
                ['加上 more than talent', 'It is practice that builds fluency more than talent.'],
                ['再加上 in adult learners', 'It is practice that builds fluency more than talent in adult learners.']
            ]
        }),
        add({
            id: 'adv-what-cleft',
            title: '分裂句：What + 子句 + is',
            topic: '先講空位，再揭曉答案',
            level: 'B2',
            source: 'fsi',
            corePattern: 'What + clause + is + complement',
            baseSentence: 'What I need is a clear example.',
            rhythm: 'what I NEED | is a CLEAR | ex-AM-ple'
        }, {
            subs: [
                ['a second chance', 'What I need is a second chance.'],
                ['more time', 'What I need is more time.'],
                ['an honest answer', 'What I need is an honest answer.'],
                ['What worries me', 'What worries me is the missing control.'],
                ['What matters', 'What matters is a clear example.'],
                ['What I meant', 'What I meant is a weaker claim.'],
                ['What we lack', 'What we lack is a clear example.'],
                ['What this shows', 'What this shows is a retrieval problem.'],
                ['consistency', 'What I need is consistency.'],
                ['a better question', 'What I need is a better question.'],
                ['evidence, not opinion', 'What I need is evidence, not opinion.'],
                ['What surprises me', 'What surprises me is the size of the gap.'],
                ['What I cannot accept', 'What I cannot accept is the missing control.'],
                ['What comes next', 'What comes next is a replication.'],
                ['patience', 'What I need is patience.']
            ],
            shadows: ['what I NEED | is more TIME', 'what WOR-ries me | is a CLEAR | ex-AM-ple', 'what this SHOWS | is a CLEAR | ex-AM-ple'],
            situation: ['討論卡住，你把真正缺的東西講出來。', 'What I need is a clear example.'],
            trans: [
                ['改成 It-cleft', 'It is a clear example that I need.'],
                ['改成普通句', 'I need a clear example.']
            ],
            resps: [
                ['What is missing from this draft?', 'What I need is a clear example.'],
                ['What is the real problem?', 'What worries me is a clear example.']
            ],
            exps: [
                ['加上 right now', 'What I need is a clear example right now.'],
                ['再加上 before we continue', 'What I need is a clear example right now before we continue.']
            ]
        }),
        add({
            id: 'adv-what-concerns-me',
            title: '評價焦點：What concerns me is',
            topic: '先標明真正在意的點',
            level: 'C1',
            source: 'chunk',
            corePattern: 'What concerns me is + noun/that-clause',
            baseSentence: 'What concerns me is the lack of evidence.',
            rhythm: 'what con-CERNS me | is the LACK | of EV-i-dence'
        }, {
            subs: [
                ['the timing', 'What concerns me is the timing.'],
                ['how this will scale', 'What concerns me is how this will scale.'],
                ['that nobody checked', 'What concerns me is that nobody checked.'],
                ['What strikes me', 'What strikes me is the lack of evidence.'],
                ['What bothers me', 'What bothers me is the lack of evidence.'],
                ['What I find odd', 'What I find odd is the lack of evidence.'],
                ['the silence after that', 'What concerns me is the silence after that.'],
                ['whether this lasts', 'What concerns me is whether this lasts.'],
                ['the cost, not the idea', 'What concerns me is the cost, not the idea.'],
                ['What stands out', 'What stands out is the lack of evidence.'],
                ['how little we know', 'What concerns me is how little we know.'],
                ['the missing control group', 'What concerns me is the missing control group.'],
                ['that we are rushing', 'What concerns me is that we are rushing.'],
                ['the side effects', 'What concerns me is the side effects.'],
                ['who gets left out', 'What concerns me is who gets left out.']
            ],
            shadows: ['what con-CERNS me | is the TIM-ing', 'what STRIKES me | is the LACK | of EV-i-dence', 'what con-CERNS me | is that we are RUSH-ing'],
            situation: ['方案聽起來漂亮，但你要點出真正的風險。', 'What concerns me is the lack of evidence.'],
            trans: [
                ['改成 I am concerned that', 'I am concerned that there is a lack of evidence.'],
                ['改成 The issue is', 'The issue is the lack of evidence.']
            ],
            resps: [
                ['Do you like the proposal?', 'What concerns me is the lack of evidence.'],
                ['Any reservations?', 'What concerns me is that we are rushing.']
            ],
            exps: [
                ['加上 so far', 'What concerns me is the lack of evidence so far.'],
                ['再加上 not the ambition itself', 'What concerns me is the lack of evidence so far, not the ambition itself.']
            ]
        }),
        add({
            id: 'adv-not-until',
            title: '倒裝：Not until + 時間 + 助動詞',
            topic: '否定副詞提前，主句倒裝',
            level: 'C1',
            source: 'fsi',
            corePattern: 'Not until X did/do + subject + verb',
            baseSentence: 'Not until midnight did we finish.',
            rhythm: 'not un-TIL MID-night | did we FIN-ish'
        }, {
            subs: [
                ['the last page', 'Not until the last page did we finish.'],
                ['she explained it', 'Not until she explained it did we finish.'],
                ['then', 'Not until then did we finish.'],
                ['did I understand', 'Not until midnight did I understand.'],
                ['did they agree', 'Not until midnight did they agree.'],
                ['did the pain stop', 'Not until midnight did the pain stop.'],
                ['the second year', 'Not until the second year did we finish.'],
                ['we saw the data', 'Not until we saw the data did we finish.'],
                ['Only then', 'Only then did we finish.'],
                ['Only later', 'Only later did we finish.'],
                ['Only after the meeting', 'Only after the meeting did we finish.'],
                ['did he admit it', 'Not until midnight did he admit it.'],
                ['did it make sense', 'Not until midnight did it make sense.'],
                ['the results came in', 'Not until the results came in did we finish.'],
                ['I read it twice', 'Not until I read it twice did we finish.']
            ],
            shadows: ['not un-TIL MID-night | did I un-der-STAND', 'ON-ly THEN | did we FIN-ish', 'not un-TIL she ex-PLAINED it | did we FIN-ish'],
            situation: ['強調很晚才真正做完或想通。', 'Not until midnight did we finish.'],
            trans: [
                ['改成正常語序', 'We did not finish until midnight.'],
                ['改成 Only after', 'Only after midnight did we finish.']
            ],
            resps: [
                ['When did it finally make sense?', 'Not until midnight did it make sense.'],
                ['When did they agree?', 'Not until midnight did they agree.']
            ],
            exps: [
                ['加上 the first draft', 'Not until midnight did we finish the first draft.'],
                ['再加上 and send it', 'Not until midnight did we finish the first draft and send it.']
            ]
        }),
        add({
            id: 'adv-rarely-have',
            title: '倒裝：Rarely / Seldom / Never have I',
            topic: '否定副詞開頭的強調',
            level: 'C1',
            source: 'fsi',
            corePattern: 'Rarely have I + past participle',
            baseSentence: 'Rarely have I seen such a clear case.',
            rhythm: 'RARE-ly have I SEEN | such a CLEAR | CASE'
        }, {
            subs: [
                ['heard that argument', 'Rarely have I heard that argument.'],
                ['felt so unsure', 'Rarely have I felt so unsure.'],
                ['met anyone kinder', 'Rarely have I met anyone kinder.'],
                ['Seldom have I', 'Seldom have I seen such a clear case.'],
                ['Never have I', 'Never have I seen such a clear case.'],
                ['Hardly ever have I', 'Hardly ever have I seen such a clear case.'],
                ['a weaker claim', 'Rarely have I seen a weaker claim.'],
                ['so little evidence', 'Rarely have I seen so little evidence.'],
                ['this much confusion', 'Rarely have I seen this much confusion.'],
                ['Little did I expect', 'Little did I expect such a clear case.'],
                ['Never before have I', 'Never before have I seen such a clear case.'],
                ['Nowhere have I', 'Nowhere have I seen such a clear case.'],
                ['a better summary', 'Rarely have I seen a better summary.'],
                ['such careless work', 'Rarely have I seen such careless work.'],
                ['this kind of pressure', 'Rarely have I seen this kind of pressure.']
            ],
            shadows: ['RARE-ly have I HEARD | that AR-gu-ment', 'NEV-er have I SEEN | such a CLEAR | CASE', 'SEL-dom have I FELT | so un-SURE'],
            situation: ['讀完一篇論證很弱的文章。', 'Rarely have I seen such a clear case.'],
            trans: [
                ['改成正常語序', 'I have rarely seen such a clear case.'],
                ['改成 Never before', 'Never before have I seen such a clear case.']
            ],
            resps: [
                ['Was the error obvious?', 'Rarely have I seen such a clear case.'],
                ['Have you heard this claim before?', 'Rarely have I heard that argument.']
            ],
            exps: [
                ['加上 in published work', 'Rarely have I seen such a clear case in published work.'],
                ['再加上 on this topic', 'Rarely have I seen such a clear case in published work on this topic.']
            ]
        }),
        add({
            id: 'adv-had-i-known',
            title: '倒裝條件：Had I known / Should you / Were I to',
            topic: '省掉 if 的正式條件句',
            level: 'C1',
            source: 'fsi',
            corePattern: 'Had/Should/Were + inversion, clause',
            baseSentence: 'Had I known, I would have waited.',
            rhythm: 'HAD I KNOWN | I would have WAI-ted'
        }, {
            subs: [
                ['I would have stayed', 'Had I known, I would have stayed.'],
                ['I would have said no', 'Had I known, I would have said no.'],
                ['Had we left earlier', 'Had we left earlier, I would have waited.'],
                ['Had she asked', 'Had she asked, I would have waited.'],
                ['Should you need help', 'Should you need help, call me.'],
                ['Should the plan fail', 'Should the plan fail, we stop.'],
                ['Were I to start again', 'Were I to start again, I would wait.'],
                ['Were it not for you', 'Were it not for you, I would have waited.'],
                ['I would have changed it', 'Had I known, I would have changed it.'],
                ['we would have stopped', 'Had I known, we would have stopped.'],
                ['Had they warned us', 'Had they warned us, I would have waited.'],
                ['Should anything change', 'Should anything change, tell me.'],
                ['Were this true', 'Were this true, the claim would stand.'],
                ['I would never have agreed', 'Had I known, I would never have agreed.'],
                ['the outcome would differ', 'Had I known, the outcome would differ.']
            ],
            shadows: ['HAD I KNOWN | I would have STAYED', 'SHOULD you NEED | HELP', 'WERE I to START | a-GAIN'],
            situation: ['事後才知道關鍵資訊。', 'Had I known, I would have waited.'],
            trans: [
                ['改成 If I had known', 'If I had known, I would have waited.'],
                ['改成 Should you need = If you need', 'If you need help, tell me.']
            ],
            resps: [
                ['Why did you leave so early?', 'Had I known, I would have waited.'],
                ['What if we need you later?', 'Should you need help, call me.']
            ],
            comps: [
                ['Had I known, ___', 'Had I known, I would have waited.'],
                ['Should you need anything, ___', 'Should you need anything, let me know.'],
                ['Were I to refuse, ___', 'Were I to refuse, they would find someone else.']
            ]
        }),
        add({
            id: 'adv-mixed-conditional',
            title: '混合條件：If I had + V3, I would + 現在',
            topic: '過去的事，現在仍受影響',
            level: 'C1',
            source: 'fsi',
            corePattern: 'If I had + V3, I would + verb now',
            baseSentence: 'If I had started earlier, I would be done now.',
            rhythm: 'if I had STAR-ted EAR-li-er | I would be DONE | NOW'
        }, {
            subs: [
                ['I would not be stuck', 'If I had started earlier, I would not be stuck.'],
                ['I would know the answer', 'If I had started earlier, I would know the answer.'],
                ['If I had slept', 'If I had slept, I would be done now.'],
                ['If I had saved more', 'If I had saved more, I would be done now.'],
                ['If she had told me', 'If she had told me, I would be done now.'],
                ['we would not be here', 'If I had started earlier, we would not be here.'],
                ['the file would be ready', 'If I had started earlier, the file would be ready.'],
                ['I would trust this', 'If I had started earlier, I would trust this.'],
                ['If they had prepared', 'If they had prepared, I would be done now.'],
                ['I would have more options', 'If I had started earlier, I would have more options.'],
                ['I would not need help', 'If I had started earlier, I would not need help.'],
                ['If I had taken notes', 'If I had taken notes, I would be done now.'],
                ['the claim would stand', 'If I had started earlier, the claim would stand.'],
                ['I would feel ready', 'If I had started earlier, I would feel ready.'],
                ['we would not be rushing', 'If I had started earlier, we would not be rushing.']
            ],
            shadows: ['if I had STAR-ted EAR-li-er | I would KNOW | the AN-swer', 'if she had TOLD me | I would be DONE | NOW', 'if I had STAR-ted EAR-li-er | we would NOT | be RUSH-ing'],
            situation: ['現在趕工，是因為昨天沒開始。', 'If I had started earlier, I would be done now.'],
            trans: [
                ['改成純第三類', 'If I had started earlier, I would have finished.'],
                ['改成純第二類', 'If I started earlier, I would be done now.']
            ],
            resps: [
                ['Why are you still working?', 'If I had started earlier, I would be done now.'],
                ['Why is this still unclear?', 'If I had taken notes, I would know the answer.']
            ],
            comps: [
                ['If I had started earlier, ___', 'If I had started earlier, I would be done now.'],
                ['If she had warned us, ___', 'If she had warned us, we would not be rushing.']
            ]
        }),
        add({
            id: 'adv-wish-regret',
            title: '後悔：I wish I had + 過去分詞',
            topic: '對過去的懊惱，不是對現在的願望',
            level: 'B2',
            source: 'spoken',
            corePattern: 'I wish I had + past participle',
            baseSentence: 'I wish I had asked earlier.',
            rhythm: 'I WISH | I had ASKED | EAR-li-er'
        }, {
            subs: [
                ['checked the date', 'I wish I had checked the date.'],
                ['said something', 'I wish I had said something.'],
                ['taken the job', 'I wish I had taken the job.'],
                ['not sent that', 'I wish I had not sent that.'],
                ['listened', 'I wish I had listened.'],
                ['left a note', 'I wish I had left a note.'],
                ['been honest', 'I wish I had been honest.'],
                ['saved a copy', 'I wish I had saved a copy.'],
                ['she / told me', 'I wish she had told me.'],
                ['we / waited', 'I wish we had waited.'],
                ['they / warned us', 'I wish they had warned us.'],
                ['never agreed', 'I wish I had never agreed.'],
                ['read the contract', 'I wish I had read the contract.'],
                ['kept my mouth shut', 'I wish I had kept my mouth shut.'],
                ['started last week', 'I wish I had started last week.']
            ],
            shadows: ['I WISH | I had CHECKED | the DATE', 'I WISH | I had NOT | SENT that', 'I WISH | she had TOLD me'],
            situation: ['錯過提問時機，現在才發現問題。', 'I wish I had asked earlier.'],
            trans: [
                ['改成 If only', 'If only I had asked earlier.'],
                ['改成對現在的 wish', 'I wish I knew the answer.']
            ],
            resps: [
                ['Any regrets about the meeting?', 'I wish I had asked earlier.'],
                ['Why are you upset about the email?', 'I wish I had not sent that.']
            ],
            exps: [
                ['加上 in the meeting', 'I wish I had asked earlier in the meeting.'],
                ['再加上 before we decided', 'I wish I had asked earlier in the meeting before we decided.']
            ]
        }),
        add({
            id: 'adv-high-time',
            title: '早該：It is high time + 過去式',
            topic: '形式上用過去，意思是現在早該做',
            level: 'C1',
            source: 'spoken',
            corePattern: "It's high time + subject + past",
            baseSentence: "It's high time we started.",
            rhythm: "it's HIGH time | we STAR-ted"
        }, {
            subs: [
                ['we left', "It's high time we left."],
                ['you told her', "It's high time you told her."],
                ['they paid', "It's high time they paid."],
                ['I admitted it', "It's high time I admitted it."],
                ['we faced this', "It's high time we faced this."],
                ["It's about time", "It's about time we started."],
                ["It's time we", "It's time we started."],
                ['you took a break', "It's high time you took a break."],
                ['we updated this', "It's high time we updated this."],
                ['he apologized', "It's high time he apologized."],
                ['we stopped guessing', "It's high time we stopped guessing."],
                ['I learned this', "It's high time I learned this."],
                ['they made a decision', "It's high time they made a decision."],
                ['we asked for help', "It's high time we asked for help."],
                ['you got some sleep', "It's high time you got some sleep."]
            ],
            shadows: ["it's HIGH time | we LEFT", "it's HIGH time | you TOLD her", "it's a-BOUT time | we STAR-ted"],
            situation: ['討論已經繞了四十分鐘。', "It's high time we started."],
            trans: [
                ['改成 We should have already', 'We should have already started.'],
                ['改成 It is time to', 'It is time to start.']
            ],
            resps: [
                ['Shall we keep talking?', "It's high time we started."],
                ['He still has not apologized.', "It's high time he apologized."]
            ],
            exps: [
                ['加上 on the real work', "It's high time we started on the real work."],
                ['再加上 instead of circling', "It's high time we started on the real work instead of circling."]
            ]
        }),
        add({
            id: 'adv-provided-that',
            title: '條件：provided that / as long as',
            topic: '只有在這個前提下才成立',
            level: 'B2',
            source: 'fsi',
            corePattern: 'clause, provided that + clause',
            baseSentence: 'I can join, provided that we finish early.',
            rhythm: 'I can JOIN | pro-VI-ded that | we FIN-ish EAR-ly'
        }, {
            subs: [
                ['as long as', 'I can join, as long as we finish early.'],
                ['so long as', 'I can join, so long as we finish early.'],
                ['on condition that', 'I can join, on condition that we finish early.'],
                ['unless we finish early', 'I can join, unless we finish early.'],
                ['I will sign', 'I will sign, provided that we finish early.'],
                ['we can publish', 'We can publish, provided that we finish early.'],
                ['the claim holds', 'The claim holds, provided that we finish early.'],
                ['you stay quiet', 'I can join, provided that you stay quiet.'],
                ['nobody objects', 'I can join, provided that nobody objects.'],
                ['the data are clean', 'I can join, provided that the data are clean.'],
                ['this stays confidential', 'I can join, provided that this stays confidential.'],
                ['I get a draft first', 'I can join, provided that I get a draft first.'],
                ['costs do not rise', 'I can join, provided that costs do not rise.'],
                ['you check the numbers', 'I can join, provided that you check the numbers.'],
                ['there is a backup plan', 'I can join, provided that there is a backup plan.']
            ],
            shadows: ['I can JOIN | as LONG as | we FIN-ish EAR-ly', 'we can PUB-lish | pro-VI-ded that | the DA-ta | are CLEAN', 'I will SIGN | on con-DI-tion that | we FIN-ish EAR-ly'],
            situation: ['你願意幫忙，但有前提。', 'I can join, provided that we finish early.'],
            trans: [
                ['改成 only if', 'I can join only if we finish early.'],
                ['改成 unless 否定', 'I cannot join unless we finish early.']
            ],
            resps: [
                ['Can you take part?', 'I can join, provided that we finish early.'],
                ['Will you sign this?', 'I will sign, provided that the data are clean.']
            ],
            exps: [
                ['加上 tomorrow', 'I can join, provided that we finish early tomorrow.'],
                ['再加上 and send me the notes', 'I can join, provided that we finish early tomorrow and send me the notes.']
            ]
        }),
        add({
            id: 'adv-given-that',
            title: '前提：Given that / Seeing that',
            topic: '把已知事實當推理起點',
            level: 'B2',
            source: 'academic',
            corePattern: 'Given that + clause, clause',
            baseSentence: 'Given that the sample is small, we should be cautious.',
            rhythm: 'GIV-en that | the SAM-ple is SMALL | we should be CAU-tious'
        }, {
            subs: [
                ['the deadline is close', 'Given that the deadline is close, we should be cautious.'],
                ['the evidence is mixed', 'Given that the evidence is mixed, we should be cautious.'],
                ['nobody has checked', 'Given that nobody has checked, we should be cautious.'],
                ['Seeing that', 'Seeing that the sample is small, we should be cautious.'],
                ['Granted that', 'Granted that the sample is small, we should be cautious.'],
                ['we cannot generalize', 'Given that the sample is small, we cannot generalize.'],
                ['this may not last', 'Given that the sample is small, this may not last.'],
                ['a second test is needed', 'Given that the sample is small, a second test is needed.'],
                ['costs have risen', 'Given that costs have risen, we should be cautious.'],
                ['the groups were unequal', 'Given that the groups were unequal, we should be cautious.'],
                ['this is only a draft', 'Given that this is only a draft, we should be cautious.'],
                ['the measure is new', 'Given that the measure is new, we should be cautious.'],
                ['In view of the fact that', 'In view of the fact that the sample is small, we should be cautious.'],
                ['I would not publish yet', 'Given that the sample is small, I would not publish yet.'],
                ['the conclusion is tentative', 'Given that the sample is small, the conclusion is tentative.']
            ],
            shadows: ['GIV-en that | the EV-i-dence | is MIXED | we should be CAU-tious', 'GIV-en that | the SAM-ple is SMALL | we can-NOT | GEN-er-al-ize', 'GIV-en that | this is ON-ly | a DRAFT | we should be CAU-tious'],
            situation: ['結果不錯，但樣本太小，你先降調。', 'Given that the sample is small, we should be cautious.'],
            trans: [
                ['改成 Because', 'Because the sample is small, we should be cautious.'],
                ['改成 In light of', 'In light of the small sample, we should be cautious.']
            ],
            resps: [
                ['Can we treat this as final?', 'Given that the sample is small, we should be cautious.'],
                ['Should we publish now?', 'Given that the sample is small, I would not publish yet.']
            ],
            exps: [
                ['加上 about the size of the effect', 'Given that the sample is small, we should be cautious about the size of the effect.'],
                ['再加上 and wait for replication', 'Given that the sample is small, we should be cautious about the size of the effect and wait for replication.']
            ]
        }),
        add({
            id: 'adv-to-the-extent',
            title: '限度：to the extent that / insofar as',
            topic: '主張只在某個範圍內成立',
            level: 'C1',
            source: 'academic',
            corePattern: 'To the extent that + clause, clause',
            baseSentence: 'To the extent that this is true, the method works.',
            rhythm: 'to the ex-TENT that | this is TRUE | the ME-thod | WORKS'
        }, {
            subs: [
                ['insofar as', 'Insofar as this is true, the method works.'],
                ['the data are reliable', 'To the extent that the data are reliable, the method works.'],
                ['we can measure it', 'To the extent that we can measure it, the method works.'],
                ['students stay engaged', 'To the extent that students stay engaged, the method works.'],
                ['the claim holds', 'To the extent that this is true, the claim holds.'],
                ['we should keep it', 'To the extent that this is true, we should keep it.'],
                ['the risk is small', 'To the extent that this is true, the risk is small.'],
                ['I agree', 'To the extent that this is true, I agree.'],
                ['the analogy is useful', 'To the extent that the analogy is useful, the method works.'],
                ['these cases are typical', 'To the extent that these cases are typical, the method works.'],
                ['the effect is causal', 'To the extent that the effect is causal, the method works.'],
                ['we can isolate the factor', 'To the extent that we can isolate the factor, the method works.'],
                ['this is not just noise', 'To the extent that this is not just noise, the method works.'],
                ['the sample represents the group', 'To the extent that the sample represents the group, the method works.'],
                ['the theory predicts this', 'To the extent that the theory predicts this, the method works.']
            ],
            shadows: ['to the ex-TENT that | the DA-ta | are re-LI-a-ble | the ME-thod | WORKS', 'in-so-FAR as | this is TRUE | I a-GREE', 'to the ex-TENT that | we can MEA-sure it | the ME-thod | WORKS'],
            situation: ['你接受對方的前提，但要把適用範圍講窄。', 'To the extent that this is true, the method works.'],
            trans: [
                ['改成 If this is true', 'If this is true, the method works.'],
                ['改成 Only if', 'The method works only if this is true.']
            ],
            resps: [
                ['Does the method always work?', 'To the extent that this is true, the method works.'],
                ['Do you accept the claim?', 'To the extent that the data are reliable, I agree.']
            ],
            exps: [
                ['加上 in this setting', 'To the extent that this is true, the method works in this setting.'],
                ['再加上 but not beyond it', 'To the extent that this is true, the method works in this setting but not beyond it.']
            ]
        }),
        add({
            id: 'adv-far-from',
            title: '否定：Far from + V-ing',
            topic: '不但不是，甚至相反',
            level: 'C1',
            source: 'academic',
            corePattern: 'Far from + V-ing, clause',
            baseSentence: 'Far from solving the problem, this made it worse.',
            rhythm: 'FAR from SOLV-ing | the PROB-lem | this MADE it | WORSE'
        }, {
            subs: [
                ['clarifying the issue', 'Far from clarifying the issue, this made it worse.'],
                ['reducing the cost', 'Far from reducing the cost, this made it worse.'],
                ['ending the debate', 'Far from ending the debate, this made it worse.'],
                ['the delay helped', 'Far from solving the problem, the delay helped.'],
                ['it revealed a gap', 'Far from solving the problem, it revealed a gap.'],
                ['it created new ones', 'Far from solving the problem, it created new ones.'],
                ['being a failure', 'Far from being a failure, this made it worse.'],
                ['proving the claim', 'Far from proving the claim, this made it worse.'],
                ['closing the gap', 'Far from closing the gap, this made it worse.'],
                ['reassuring people', 'Far from reassuring people, this made it worse.'],
                ['simplifying the task', 'Far from simplifying the task, this made it worse.'],
                ['the new rule backfired', 'Far from solving the problem, the new rule backfired.'],
                ['it confused the sample', 'Far from solving the problem, it confused the sample.'],
                ['settling the question', 'Far from settling the question, this made it worse.'],
                ['removing bias', 'Far from removing bias, this made it worse.']
            ],
            shadows: ['FAR from CLA-ri-fy-ing | the IS-sue | this MADE it | WORSE', 'FAR from PROV-ing | the CLAIM | this MADE it | WORSE', 'FAR from SET-tling | the QUES-tion | this MADE it | WORSE'],
            situation: ['有人說新措施已經把問題解決了。', 'Far from solving the problem, this made it worse.'],
            trans: [
                ['改成 Instead of', 'Instead of solving the problem, this made it worse.'],
                ['改成 This did not solve; it made worse', 'This did not solve the problem; it made it worse.']
            ],
            resps: [
                ['Did the new rule help?', 'Far from solving the problem, this made it worse.'],
                ['Did that settle the debate?', 'Far from ending the debate, this made it worse.']
            ],
            exps: [
                ['加上 in every group', 'Far from solving the problem, this made it worse in every group.'],
                ['再加上 over the next month', 'Far from solving the problem, this made it worse in every group over the next month.']
            ]
        }),
        add({
            id: 'adv-this-is-not-to-say',
            title: '限縮：This is not to say that',
            topic: '先否定過度推論',
            level: 'C1',
            source: 'academic',
            corePattern: 'This is not to say that + clause',
            baseSentence: 'This is not to say that the method is useless.',
            rhythm: 'this is NOT to SAY that | the ME-thod | is USE-less'
        }, {
            subs: [
                ['the effect is zero', 'This is not to say that the effect is zero.'],
                ['we should abandon it', 'This is not to say that we should abandon it.'],
                ['the authors were careless', 'This is not to say that the authors were careless.'],
                ['I reject the whole study', 'This is not to say that I reject the whole study.'],
                ['That is not to deny that it helps', 'That is not to deny that it helps.'],
                ['I do not mean that we should quit', 'I do not mean that we should quit.'],
                ['None of this implies that we stop', 'None of this implies that we stop.'],
                ['the finding is trivial', 'This is not to say that the finding is trivial.'],
                ['practice does not matter', 'This is not to say that practice does not matter.'],
                ['the question is closed', 'This is not to say that the question is closed.'],
                ['all students benefit equally', 'This is not to say that all students benefit equally.'],
                ['the theory collapses', 'This is not to say that the theory collapses.'],
                ['we have a full explanation', 'This is not to say that we have a full explanation.'],
                ['later work is irrelevant', 'This is not to say that later work is irrelevant.'],
                ['the limitation is fatal', 'This is not to say that the limitation is fatal.']
            ],
            shadows: ['this is NOT to SAY that | we should a-BAN-don it', 'NONE of this im-PLIES that | the ME-thod | is USE-less', 'this is NOT to SAY that | the QUES-tion | is CLOSED'],
            situation: ['你剛批評完方法，怕聽者以為全盤否定。', 'This is not to say that the method is useless.'],
            trans: [
                ['改成 I am not claiming that', 'I am not claiming that the method is useless.'],
                ['改成 That does not mean', 'That does not mean the method is useless.']
            ],
            resps: [
                ['So you think we should drop it?', 'This is not to say that the method is useless.'],
                ['Are you rejecting the study?', 'This is not to say that I reject the whole study.']
            ],
            exps: [
                ['加上 only that it is incomplete', 'This is not to say that the method is useless, only that it is incomplete.'],
                ['再加上 for this population', 'This is not to say that the method is useless, only that it is incomplete for this population.']
            ]
        }),
        add({
            id: 'adv-it-would-be-premature',
            title: '保留：It would be premature to',
            topic: '現在下結論還太早',
            level: 'C1',
            source: 'academic',
            corePattern: 'It would be premature to + verb',
            baseSentence: 'It would be premature to treat this as settled.',
            rhythm: 'it would be pre-ma-TURE | to TREAT this | as SET-tled'
        }, {
            subs: [
                ['change the policy', 'It would be premature to change the policy.'],
                ['drop the theory', 'It would be premature to drop the theory.'],
                ['claim a causal effect', 'It would be premature to claim a causal effect.'],
                ['generalize from this', 'It would be premature to generalize from this.'],
                ['rule out the alternative', 'It would be premature to rule out the alternative.'],
                ['celebrate the result', 'It would be premature to celebrate the result.'],
                ['close the question', 'It would be premature to close the question.'],
                ['recommend this widely', 'It would be premature to recommend this widely.'],
                ['It is too early to', 'It is too early to treat this as settled.'],
                ['We should hesitate to', 'We should hesitate to treat this as settled.'],
                ['accept the stronger claim', 'It would be premature to accept the stronger claim.'],
                ['discard the older model', 'It would be premature to discard the older model.'],
                ['say the method failed', 'It would be premature to say the method failed.'],
                ['scale this up', 'It would be premature to scale this up.'],
                ['treat one study as proof', 'It would be premature to treat one study as proof.']
            ],
            shadows: ['it would be pre-ma-TURE | to CLAIM | a CAU-sal | ef-FECT', 'it would be pre-ma-TURE | to GEN-er-al-ize | from THIS', 'it is TOO EAR-ly | to TREAT this | as SET-tled'],
            situation: ['有人要把單篇結果寫進結論當定論。', 'It would be premature to treat this as settled.'],
            trans: [
                ['改成 We cannot yet', 'We cannot yet treat this as settled.'],
                ['改成 It is too soon to', 'It is too soon to treat this as settled.']
            ],
            resps: [
                ['Can we call this proven?', 'It would be premature to treat this as settled.'],
                ['Should we change the policy now?', 'It would be premature to change the policy.']
            ],
            exps: [
                ['加上 on the basis of one study', 'It would be premature to treat this as settled on the basis of one study.'],
                ['再加上 without a replication', 'It would be premature to treat this as settled on the basis of one study without a replication.']
            ]
        }),
        add({
            id: 'adv-leaves-open',
            title: '開放：This leaves open the possibility that',
            topic: '結果沒把另一種解釋關死',
            level: 'C1',
            source: 'academic',
            corePattern: 'This leaves open the possibility that + clause',
            baseSentence: 'This leaves open the possibility that the effect is delayed.',
            rhythm: 'this LEAVES O-pen | the pos-si-BIL-i-ty that | the ef-FECT | is de-LAYED'
        }, {
            subs: [
                ['practice was too short', 'This leaves open the possibility that practice was too short.'],
                ['a third factor is at work', 'This leaves open the possibility that a third factor is at work.'],
                ['the measure missed the change', 'This leaves open the possibility that the measure missed the change.'],
                ['the gain will fade', 'This leaves open the possibility that the gain will fade.'],
                ['This does not rule out', 'This does not rule out the possibility that the effect is delayed.'],
                ['An alternative is that', 'An alternative is that the effect is delayed.'],
                ['One cannot exclude', 'One cannot exclude the possibility that the effect is delayed.'],
                ['the groups differed at the start', 'This leaves open the possibility that the groups differed at the start.'],
                ['the result is noise', 'This leaves open the possibility that the result is noise.'],
                ['motivation, not method, drove this', 'This leaves open the possibility that motivation, not method, drove this.'],
                ['later trials will fail', 'This leaves open the possibility that later trials will fail.'],
                ['the wording caused the shift', 'This leaves open the possibility that the wording caused the shift.'],
                ['we underpowered the test', 'This leaves open the possibility that we underpowered the test.'],
                ['the effect is confined to experts', 'This leaves open the possibility that the effect is confined to experts.'],
                ['both accounts are still viable', 'This leaves open the possibility that both accounts are still viable.']
            ],
            shadows: ['this LEAVES O-pen | the pos-si-BIL-i-ty that | a THIRD FAC-tor | is at WORK', 'this does NOT RULE OUT | that the ef-FECT | is de-LAYED', 'this LEAVES O-pen | the pos-si-BIL-i-ty that | the re-SULT | is NOISE'],
            situation: ['零結果，但不代表沒有效應。', 'This leaves open the possibility that the effect is delayed.'],
            trans: [
                ['改成 We cannot rule out that', 'We cannot rule out that the effect is delayed.'],
                ['改成 An alternative is that', 'An alternative is that the effect is delayed.']
            ],
            resps: [
                ['Does a null result kill the idea?', 'This leaves open the possibility that the effect is delayed.'],
                ['Is the other theory dead?', 'This leaves open the possibility that both accounts are still viable.']
            ],
            exps: [
                ['加上 rather than absent', 'This leaves open the possibility that the effect is delayed rather than absent.'],
                ['再加上 in less trained speakers', 'This leaves open the possibility that the effect is delayed rather than absent in less trained speakers.']
            ]
        }),
        add({
            id: 'adv-neither-nor',
            title: '充分必要：neither necessary nor sufficient',
            topic: '精確講條件關係',
            level: 'C1',
            source: 'academic',
            corePattern: 'X is neither necessary nor sufficient for Y',
            baseSentence: 'Practice is neither necessary nor sufficient for fluency.',
            rhythm: 'PRAC-tice is NEI-ther | NE-ces-sa-ry nor suf-FI-cient | for FLU-en-cy'
        }, {
            subs: [
                ['talent', 'Talent is neither necessary nor sufficient for fluency.'],
                ['feedback', 'Feedback is neither necessary nor sufficient for fluency.'],
                ['for transfer', 'Practice is neither necessary nor sufficient for transfer.'],
                ['for accuracy', 'Practice is neither necessary nor sufficient for accuracy.'],
                ['A large sample', 'A large sample is neither necessary nor sufficient for fluency.'],
                ['Motivation', 'Motivation is neither necessary nor sufficient for fluency.'],
                ['necessary but not sufficient', 'Practice is necessary but not sufficient for fluency.'],
                ['sufficient but not necessary', 'Practice is sufficient but not necessary for fluency.'],
                ['Time on task', 'Time on task is neither necessary nor sufficient for fluency.'],
                ['for a causal claim', 'Practice is neither necessary nor sufficient for a causal claim.'],
                ['for publication', 'Practice is neither necessary nor sufficient for publication.'],
                ['A pretest', 'A pretest is neither necessary nor sufficient for fluency.'],
                ['Error correction', 'Error correction is neither necessary nor sufficient for fluency.'],
                ['for lasting change', 'Practice is neither necessary nor sufficient for lasting change.'],
                ['for classroom success', 'Practice is neither necessary nor sufficient for classroom success.']
            ],
            shadows: ['PRAC-tice is NE-ces-sa-ry | but NOT suf-FI-cient | for FLU-en-cy', 'TAL-ent is NEI-ther | NE-ces-sa-ry nor suf-FI-cient | for FLU-en-cy', 'TIME on TASK | is NEI-ther | NE-ces-sa-ry nor suf-FI-cient | for FLU-en-cy'],
            situation: ['有人把練習講成唯一條件。', 'Practice is neither necessary nor sufficient for fluency.'],
            trans: [
                ['改成必要但不充分', 'Practice is necessary but not sufficient for fluency.'],
                ['改成 X alone cannot guarantee', 'Practice alone cannot guarantee fluency.']
            ],
            resps: [
                ['Is practice all we need?', 'Practice is neither necessary nor sufficient for fluency.'],
                ['Is a large sample enough?', 'A large sample is neither necessary nor sufficient for fluency.']
            ],
            exps: [
                ['加上 on its own', 'Practice is neither necessary nor sufficient for fluency on its own.'],
                ['再加上 in the first months', 'Practice is neither necessary nor sufficient for fluency on its own in the first months.']
            ]
        }),
        add({
            id: 'adv-distinguish-between',
            title: '區分：We distinguish between X and Y',
            topic: '把兩個容易混的概念拆開',
            level: 'B2',
            source: 'academic',
            corePattern: 'We distinguish between X and Y',
            baseSentence: 'We distinguish between fluency and accuracy.',
            rhythm: 'we dis-TIN-guish be-TWEEN | FLU-en-cy | and AC-cu-ra-cy'
        }, {
            subs: [
                ['competence and performance', 'We distinguish between competence and performance.'],
                ['cause and correlation', 'We distinguish between cause and correlation.'],
                ['use and mention', 'We distinguish between use and mention.'],
                ['learning and performance', 'We distinguish between learning and performance.'],
                ['input and intake', 'We distinguish between input and intake.'],
                ['error and mistake', 'We distinguish between error and mistake.'],
                ['It is important to separate', 'It is important to separate fluency and accuracy.'],
                ['X should not be confused with Y', 'Fluency should not be confused with accuracy.'],
                ['short-term and lasting change', 'We distinguish between short-term and lasting change.'],
                ['the construct and the measure', 'We distinguish between the construct and the measure.'],
                ['policy and mechanism', 'We distinguish between policy and mechanism.'],
                ['description and explanation', 'We distinguish between description and explanation.'],
                ['the sample and the population', 'We distinguish between the sample and the population.'],
                ['explicit and implicit knowledge', 'We distinguish between explicit and implicit knowledge.'],
                ['outcome and process', 'We distinguish between outcome and process.']
            ],
            shadows: ['we dis-TIN-guish be-TWEEN | CAUSE | and cor-re-LA-tion', 'FLU-en-cy should NOT | be con-FUSED with | AC-cu-ra-cy', 'we dis-TIN-guish be-TWEEN | the con-STRUCT | and the MEA-sure'],
            situation: ['口試裡對方把流利和正確混在一起。', 'We distinguish between fluency and accuracy.'],
            trans: [
                ['改成 X is not the same as Y', 'Fluency is not the same as accuracy.'],
                ['改成 A distinction is needed between', 'A distinction is needed between fluency and accuracy.']
            ],
            resps: [
                ['Are fluency and accuracy the same?', 'We distinguish between fluency and accuracy.'],
                ['Is this a causal claim?', 'We distinguish between cause and correlation.']
            ],
            exps: [
                ['加上 in this paper', 'We distinguish between fluency and accuracy in this paper.'],
                ['再加上 because they move separately', 'We distinguish between fluency and accuracy in this paper because they move separately.']
            ]
        }),
        add({
            id: 'adv-beyond-scope',
            title: '範圍：X is beyond the scope of this paper',
            topic: '明確說什麼不處理',
            level: 'B2',
            source: 'academic',
            corePattern: 'X is beyond the scope of this paper',
            baseSentence: 'A full causal model is beyond the scope of this paper.',
            rhythm: 'a FULL CAU-sal MOD-el | is be-YOND the SCOPE | of this PA-per'
        }, {
            subs: [
                ['Classroom implementation', 'Classroom implementation is beyond the scope of this paper.'],
                ['A cross-linguistic comparison', 'A cross-linguistic comparison is beyond the scope of this paper.'],
                ['The policy debate', 'The policy debate is beyond the scope of this paper.'],
                ['A formal proof', 'A formal proof is beyond the scope of this paper.'],
                ['Longitudinal follow-up', 'Longitudinal follow-up is beyond the scope of this paper.'],
                ['We do not attempt', 'We do not attempt a full causal model.'],
                ['I set aside', 'I set aside a full causal model.'],
                ['This question lies outside', 'This question lies outside the scope of this paper.'],
                ['A complete typology', 'A complete typology is beyond the scope of this paper.'],
                ['Individual case histories', 'Individual case histories are beyond the scope of this paper.'],
                ['The ethical debate', 'The ethical debate is beyond the scope of this paper.'],
                ['A new measurement tool', 'A new measurement tool is beyond the scope of this paper.'],
                ['We leave to future work', 'We leave to future work a full causal model.'],
                ['Detailed coding manuals', 'Detailed coding manuals are beyond the scope of this paper.'],
                ['A cost-benefit analysis', 'A cost-benefit analysis is beyond the scope of this paper.']
            ],
            shadows: ['class-ROOM im-ple-men-TA-tion | is be-YOND the SCOPE | of this PA-per', 'this QUES-tion | LIES OUT-side | the SCOPE | of this PA-per', 'we LEAVE to FU-ture WORK | a FULL CAU-sal | MOD-el'],
            situation: ['口試有人追問你沒做的因果模型。', 'A full causal model is beyond the scope of this paper.'],
            trans: [
                ['改成 We do not attempt to', 'We do not attempt to build a full causal model.'],
                ['改成 This question lies outside', 'This question lies outside the scope of this paper.']
            ],
            resps: [
                ['Why is there no causal model?', 'A full causal model is beyond the scope of this paper.'],
                ['Did you follow students for a year?', 'Longitudinal follow-up is beyond the scope of this paper.']
            ],
            exps: [
                ['加上 though it matters', 'A full causal model is beyond the scope of this paper, though it matters.'],
                ['再加上 and is left for later work', 'A full causal model is beyond the scope of this paper, though it matters, and is left for later work.']
            ]
        }),
        add({
            id: 'adv-at-odds-with',
            title: '對位：This is consistent with / at odds with',
            topic: '跟既有文獻對上或對不上',
            level: 'B2',
            source: 'academic',
            corePattern: 'This is consistent with / at odds with + noun',
            baseSentence: 'This is consistent with earlier findings.',
            rhythm: 'this is con-SIS-tent with | EAR-li-er | FIND-ings'
        }, {
            subs: [
                ['Smith 2019', 'This is consistent with Smith 2019.'],
                ['the main prediction', 'This is consistent with the main prediction.'],
                ['a practice-based account', 'This is consistent with a practice-based account.'],
                ['at odds with earlier findings', 'This is at odds with earlier findings.'],
                ['hard to reconcile with', 'This is hard to reconcile with earlier findings.'],
                ['in line with', 'This is in line with earlier findings.'],
                ['compatible with', 'This is compatible with earlier findings.'],
                ['difficult to square with', 'This is difficult to square with earlier findings.'],
                ['the null hypothesis', 'This is consistent with the null hypothesis.'],
                ['reports from teachers', 'This is consistent with reports from teachers.'],
                ['a purely lexical account', 'This is at odds with a purely lexical account.'],
                ['what the model expects', 'This is consistent with what the model expects.'],
                ['most classroom studies', 'This is consistent with most classroom studies.'],
                ['our first experiment', 'This is at odds with our first experiment.'],
                ['a strong transfer claim', 'This is at odds with a strong transfer claim.']
            ],
            shadows: ['this is con-SIS-tent with | the MAIN | pre-DIC-tion', 'this is at ODDS with | EAR-li-er | FIND-ings', 'this is HARD to rec-on-CILE with | EAR-li-er | FIND-ings'],
            situation: ['討論節第一句，對文獻。', 'This is consistent with earlier findings.'],
            trans: [
                ['改成 This supports', 'This supports earlier findings.'],
                ['改成 This conflicts with', 'This conflicts with earlier findings.']
            ],
            resps: [
                ['How does this sit with the literature?', 'This is consistent with earlier findings.'],
                ['Does this match Experiment 1?', 'This is at odds with our first experiment.']
            ],
            exps: [
                ['加上 on transfer', 'This is consistent with earlier findings on transfer.'],
                ['再加上 but not on retention', 'This is consistent with earlier findings on transfer but not on retention.']
            ]
        }),
        add({
            id: 'adv-growing-body',
            title: '文獻量：A growing body of evidence suggests',
            topic: '不是單篇，是一組研究往同一方向',
            level: 'B2',
            source: 'academic',
            corePattern: 'A growing body of evidence suggests that + clause',
            baseSentence: 'A growing body of evidence suggests that timing matters.',
            rhythm: 'a GROW-ing BOD-y | of EV-i-dence | sug-GESTS that | TIM-ing MAT-ters'
        }, {
            subs: [
                ['feedback must be immediate', 'A growing body of evidence suggests that feedback must be immediate.'],
                ['short drills compound', 'A growing body of evidence suggests that short drills compound.'],
                ['transfer is limited', 'A growing body of evidence suggests that transfer is limited.'],
                ['There is mounting evidence that', 'There is mounting evidence that timing matters.'],
                ['A substantial literature shows', 'A substantial literature shows that timing matters.'],
                ['Converging results indicate', 'Converging results indicate that timing matters.'],
                ['sleep supports retention', 'A growing body of evidence suggests that sleep supports retention.'],
                ['the effect is dose-dependent', 'A growing body of evidence suggests that the effect is dose-dependent.'],
                ['motivation is not enough', 'A growing body of evidence suggests that motivation is not enough.'],
                ['explicit rules fade fast', 'A growing body of evidence suggests that explicit rules fade fast.'],
                ['spoken chunks are stored whole', 'A growing body of evidence suggests that spoken chunks are stored whole.'],
                ['the first hours are decisive', 'A growing body of evidence suggests that the first hours are decisive.'],
                ['classroom talk is underused', 'A growing body of evidence suggests that classroom talk is underused.'],
                ['accuracy can wait', 'A growing body of evidence suggests that accuracy can wait.'],
                ['spaced practice beats massed practice', 'A growing body of evidence suggests that spaced practice beats massed practice.']
            ],
            shadows: ['a GROW-ing BOD-y | of EV-i-dence | sug-GESTS that | trans-FER | is LIM-it-ed', 'there is MOUNT-ing EV-i-dence that | TIM-ing MAT-ters', 'con-VERG-ing re-SULTS | IN-di-cate that | TIM-ing MAT-ters'],
            situation: ['引言裡交代領域共識。', 'A growing body of evidence suggests that timing matters.'],
            trans: [
                ['改成 There is mounting evidence that', 'There is mounting evidence that timing matters.'],
                ['改成更弱 Some evidence suggests', 'Some evidence suggests that timing matters.']
            ],
            resps: [
                ['Is this just one study?', 'A growing body of evidence suggests that timing matters.'],
                ['What does the field now think?', 'A growing body of evidence suggests that transfer is limited.']
            ],
            exps: [
                ['加上 more than total hours', 'A growing body of evidence suggests that timing matters more than total hours.'],
                ['再加上 in the first weeks', 'A growing body of evidence suggests that timing matters more than total hours in the first weeks.']
            ]
        }),
        add({
            id: 'adv-little-consensus',
            title: '爭議：There is little consensus on',
            topic: '領域還沒談攏',
            level: 'B2',
            source: 'academic',
            corePattern: 'There is little consensus on + noun/wh-clause',
            baseSentence: 'There is little consensus on how fluency should be measured.',
            rhythm: 'there is LIT-tle con-SEN-sus | on HOW FLU-en-cy | should be MEA-sured'
        }, {
            subs: [
                ['what counts as transfer', 'There is little consensus on what counts as transfer.'],
                ['the size of the effect', 'There is little consensus on the size of the effect.'],
                ['whether drills help', 'There is little consensus on whether drills help.'],
                ['The issue remains contested', 'The issue remains contested.'],
                ['Opinion is divided on', 'Opinion is divided on how fluency should be measured.'],
                ['No agreement has been reached on', 'No agreement has been reached on how fluency should be measured.'],
                ['the best unit of practice', 'There is little consensus on the best unit of practice.'],
                ['how long the gain lasts', 'There is little consensus on how long the gain lasts.'],
                ['who benefits most', 'There is little consensus on who benefits most.'],
                ['the role of explicit rules', 'There is little consensus on the role of explicit rules.'],
                ['how to code hesitation', 'There is little consensus on how to code hesitation.'],
                ['whether accuracy must come first', 'There is little consensus on whether accuracy must come first.'],
                ['the definition itself', 'There is little consensus on the definition itself.'],
                ['what a fair control looks like', 'There is little consensus on what a fair control looks like.'],
                ['how to scale the method', 'There is little consensus on how to scale the method.']
            ],
            shadows: ['there is LIT-tle con-SEN-sus | on WHAT COUNTS | as TRANS-fer', 'the IS-sue | re-MAINS | con-TES-ted', 'o-PIN-ion is di-VI-ded | on HOW FLU-en-cy | should be MEA-sured'],
            situation: ['文獻回顧承認領域分裂。', 'There is little consensus on how fluency should be measured.'],
            trans: [
                ['改成 The issue remains contested', 'The issue remains contested.'],
                ['改成 Opinion is divided', 'Opinion is divided on this point.']
            ],
            resps: [
                ['Has the field settled this?', 'There is little consensus on how fluency should be measured.'],
                ['Do people agree that drills help?', 'There is little consensus on whether drills help.']
            ],
            exps: [
                ['加上 in classroom research', 'There is little consensus on how fluency should be measured in classroom research.'],
                ['再加上 or in testing', 'There is little consensus on how fluency should be measured in classroom research or in testing.']
            ]
        }),
        add({
            id: 'adv-worth-noting',
            title: '標記：It is worth noting that',
            topic: '提醒讀者別略過這一點',
            level: 'B2',
            source: 'academic',
            corePattern: 'It is worth noting that + clause',
            baseSentence: 'It is worth noting that the two groups were not equal.',
            rhythm: 'it is WORTH NOT-ing that | the TWO GROUPS | were NOT E-qual'
        }, {
            subs: [
                ['the effect appeared late', 'It is worth noting that the effect appeared late.'],
                ['only one item drove the result', 'It is worth noting that only one item drove the result.'],
                ['attrition was uneven', 'It is worth noting that attrition was uneven.'],
                ['It should be noted that', 'It should be noted that the two groups were not equal.'],
                ['Notably', 'Notably, the two groups were not equal.'],
                ['A related point is that', 'A related point is that the two groups were not equal.'],
                ['the pretest already differed', 'It is worth noting that the pretest already differed.'],
                ['the instruction was bilingual', 'It is worth noting that the instruction was bilingual.'],
                ['we did not counterbalance', 'It is worth noting that we did not counterbalance.'],
                ['the gain was confined to trained items', 'It is worth noting that the gain was confined to trained items.'],
                ['participants guessed the aim', 'It is worth noting that participants guessed the aim.'],
                ['the control also improved', 'It is worth noting that the control also improved.'],
                ['the wording changed mid-study', 'It is worth noting that the wording changed mid-study.'],
                ['the sample was self-selected', 'It is worth noting that the sample was self-selected.'],
                ['this pattern replicated', 'It is worth noting that this pattern replicated.']
            ],
            shadows: ['it is WORTH NOT-ing that | the ef-FECT | ap-PEARED | LATE', 'it SHOULD be NOT-ed that | the TWO GROUPS | were NOT E-qual', 'it is WORTH NOT-ing that | the con-TROL | AL-so im-PROVED'],
            situation: ['結果看起來漂亮，但兩組一開始就不一樣。', 'It is worth noting that the two groups were not equal.'],
            trans: [
                ['改成 Notably', 'Notably, the two groups were not equal.'],
                ['改成 Readers should note that', 'Readers should note that the two groups were not equal.']
            ],
            resps: [
                ['Anything we should not ignore?', 'It is worth noting that the two groups were not equal.'],
                ['Did the control stay flat?', 'It is worth noting that the control also improved.']
            ],
            exps: [
                ['加上 at pretest', 'It is worth noting that the two groups were not equal at pretest.'],
                ['再加上 on the key measure', 'It is worth noting that the two groups were not equal at pretest on the key measure.']
            ]
        }),
        add({
            id: 'adv-on-balance',
            title: '權衡：On balance / All things considered',
            topic: '正反都看過以後的總判斷',
            level: 'C1',
            source: 'academic',
            corePattern: 'On balance, + independent clause',
            baseSentence: 'On balance, the method is worth keeping.',
            rhythm: 'on BAL-ance | the ME-thod | is WORTH KEEP-ing'
        }, {
            subs: [
                ['the gain outweighs the cost', 'On balance, the gain outweighs the cost.'],
                ['we should not scale this yet', 'On balance, we should not scale this yet.'],
                ['the evidence favors a weak claim', 'On balance, the evidence favors a weak claim.'],
                ['All things considered', 'All things considered, the method is worth keeping.'],
                ['All in all', 'All in all, the method is worth keeping.'],
                ['Taking everything into account', 'Taking everything into account, the method is worth keeping.'],
                ['the simpler model is enough', 'On balance, the simpler model is enough.'],
                ['the risk is acceptable', 'On balance, the risk is acceptable.'],
                ['I would still recommend it', 'On balance, I would still recommend it.'],
                ['the study earns a cautious yes', 'On balance, the study earns a cautious yes.'],
                ['replication is the next step', 'On balance, replication is the next step.'],
                ['we learned more than we lost', 'On balance, we learned more than we lost.'],
                ['the criticism is fair but not fatal', 'On balance, the criticism is fair but not fatal.'],
                ['this remains a useful first cut', 'On balance, this remains a useful first cut.'],
                ['I side with the weaker version', 'On balance, I side with the weaker version.']
            ],
            shadows: ['on BAL-ance | the GAIN | out-WEIGHS | the COST', 'ALL things con-SID-ered | the ME-thod | is WORTH KEEP-ing', 'on BAL-ance | I would STILL | rec-om-MEND it'],
            situation: ['限制很多，但仍要給一個總評。', 'On balance, the method is worth keeping.'],
            trans: [
                ['改成 All things considered', 'All things considered, the method is worth keeping.'],
                ['改成 Weighing the evidence', 'Weighing the evidence, the method is worth keeping.']
            ],
            resps: [
                ['So, keep it or drop it?', 'On balance, the method is worth keeping.'],
                ['Is the criticism fatal?', 'On balance, the criticism is fair but not fatal.']
            ],
            exps: [
                ['加上 for classroom use', 'On balance, the method is worth keeping for classroom use.'],
                ['再加上 if the claim stays modest', 'On balance, the method is worth keeping for classroom use if the claim stays modest.']
            ]
        }),
        add({
            id: 'adv-at-first-glance',
            title: '兩步看：At first glance / On closer inspection',
            topic: '表面與細看相反',
            level: 'C1',
            source: 'academic',
            corePattern: 'At first glance, ... On closer inspection, ...',
            baseSentence: 'At first glance, the result looks strong.',
            rhythm: 'at FIRST GLANCE | the re-SULT | looks STRONG'
        }, {
            subs: [
                ['the groups are similar', 'At first glance, the groups are similar.'],
                ['the method seems new', 'At first glance, the method seems new.'],
                ['the gain is large', 'At first glance, the gain is large.'],
                ['On closer inspection, it is not', 'On closer inspection, it is not.'],
                ['On closer inspection, one item drives it', 'On closer inspection, one item drives it.'],
                ['On closer inspection, the control also rose', 'On closer inspection, the control also rose.'],
                ['the argument is neat', 'At first glance, the argument is neat.'],
                ['the table is reassuring', 'At first glance, the table is reassuring.'],
                ['nothing looks wrong', 'At first glance, nothing looks wrong.'],
                ['the theory fits', 'At first glance, the theory fits.'],
                ['On closer inspection, the fit is forced', 'On closer inspection, the fit is forced.'],
                ['On closer inspection, the coding is uneven', 'On closer inspection, the coding is uneven.'],
                ['the drop is dramatic', 'At first glance, the drop is dramatic.'],
                ['On closer inspection, the baseline was odd', 'On closer inspection, the baseline was odd.'],
                ['this appears decisive', 'At first glance, this appears decisive.']
            ],
            shadows: ['at FIRST GLANCE | the re-SULT | looks STRONG', 'on CLO-ser in-SPEC-tion | ONE I-tem | DRIVES it', 'at FIRST GLANCE | the AR-gu-ment | is NEAT'],
            situation: ['圖表很漂亮，但你要讀者再看一眼。', 'At first glance, the result looks strong.'],
            trans: [
                ['改成 Superficially / In fact', 'Superficially the result looks strong; in fact it is not.'],
                ['接上 On closer inspection', 'At first glance the result looks strong. On closer inspection, it is not.']
            ],
            resps: [
                ['The figure looks convincing.', 'At first glance, the result looks strong.'],
                ['Did you check the items?', 'On closer inspection, one item drives it.']
            ],
            ints: [
                ['At first glance the result looks strong. The control also rose.', 'At first glance the result looks strong; on closer inspection, the control also rose.']
            ],
            exps: [
                ['加上 in Figure 2', 'At first glance, the result looks strong in Figure 2.'],
                ['再加上 until you check the control', 'At first glance, the result looks strong in Figure 2 until you check the control.']
            ]
        }),
        add({
            id: 'adv-it-follows-that',
            title: '推論：It follows that / This implies that',
            topic: '從前提推出下一步',
            level: 'B2',
            source: 'academic',
            corePattern: 'It follows that + clause',
            baseSentence: 'It follows that the claim is too strong.',
            rhythm: 'it FOL-lows that | the CLAIM | is TOO STRONG'
        }, {
            subs: [
                ['we need a better measure', 'It follows that we need a better measure.'],
                ['practice alone is not enough', 'It follows that practice alone is not enough.'],
                ['the two cannot be equated', 'It follows that the two cannot be equated.'],
                ['This implies that', 'This implies that the claim is too strong.'],
                ['This entails that', 'This entails that the claim is too strong.'],
                ['The upshot is that', 'The upshot is that the claim is too strong.'],
                ['a weaker version is safer', 'It follows that a weaker version is safer.'],
                ['the design must change', 'It follows that the design must change.'],
                ['we should not generalize yet', 'It follows that we should not generalize yet.'],
                ['both factors have to be kept', 'It follows that both factors have to be kept.'],
                ['the older account survives', 'It follows that the older account survives.'],
                ['the next study must be longer', 'It follows that the next study must be longer.'],
                ['teachers cannot wait for accuracy', 'It follows that teachers cannot wait for accuracy.'],
                ['the null is still live', 'It follows that the null is still live.'],
                ['the definition has to be tightened', 'It follows that the definition has to be tightened.']
            ],
            shadows: ['it FOL-lows that | we NEED | a BET-ter | MEA-sure', 'this im-PLIES that | the CLAIM | is TOO STRONG', 'the UP-shot is that | a WEAK-er VER-sion | is SA-fer'],
            situation: ['前提已經成立，現在收推論。', 'It follows that the claim is too strong.'],
            trans: [
                ['改成 Therefore', 'Therefore, the claim is too strong.'],
                ['改成 This implies that', 'This implies that the claim is too strong.']
            ],
            resps: [
                ['So what follows from that?', 'It follows that the claim is too strong.'],
                ['What should we change?', 'It follows that we need a better measure.']
            ],
            exps: [
                ['加上 given these data', 'It follows that the claim is too strong given these data.'],
                ['再加上 and should be narrowed', 'It follows that the claim is too strong given these data and should be narrowed.']
            ]
        }),
        add({
            id: 'adv-that-said',
            title: '讓步轉折：That said / That being said',
            topic: '承認前句，但仍要補另一面',
            level: 'B2',
            source: 'chunk',
            corePattern: 'That said, + independent clause',
            baseSentence: 'That said, the method is still useful.',
            rhythm: 'that SAID | the ME-thod | is STILL USE-ful'
        }, {
            subs: [
                ['I would not drop it', 'That said, I would not drop it.'],
                ['the weaker claim survives', 'That said, the weaker claim survives.'],
                ['we can still use the tool', 'That said, we can still use the tool.'],
                ['That being said', 'That being said, the method is still useful.'],
                ['Having said that', 'Having said that, the method is still useful.'],
                ['Even so', 'Even so, the method is still useful.'],
                ['the limitation is not fatal', 'That said, the limitation is not fatal.'],
                ['classroom teachers can adapt it', 'That said, classroom teachers can adapt it.'],
                ['a short version may work', 'That said, a short version may work.'],
                ['I remain sympathetic', 'That said, I remain sympathetic.'],
                ['the first result still matters', 'That said, the first result still matters.'],
                ['we should not overcorrect', 'That said, we should not overcorrect.'],
                ['the idea is worth another test', 'That said, the idea is worth another test.'],
                ['I would keep the core drill', 'That said, I would keep the core drill.'],
                ['this does not ruin the paper', 'That said, this does not ruin the paper.']
            ],
            shadows: ['that SAID | I would NOT | DROP it', 'HAV-ing SAID that | the ME-thod | is STILL USE-ful', 'that SAID | the li-mi-TA-tion | is NOT FA-tal'],
            situation: ['剛講完一堆限制，現在把話拉回來。', 'That said, the method is still useful.'],
            trans: [
                ['改成 However', 'However, the method is still useful.'],
                ['改成 Even so', 'Even so, the method is still useful.']
            ],
            resps: [
                ['So should we abandon it?', 'That said, I would not drop it.'],
                ['Does the limitation kill the paper?', 'That said, this does not ruin the paper.']
            ],
            exps: [
                ['加上 in the first weeks', 'That said, the method is still useful in the first weeks.'],
                ['再加上 if the claim stays modest', 'That said, the method is still useful in the first weeks if the claim stays modest.']
            ]
        }),
        add({
            id: 'adv-to-put-it',
            title: '換說法：To put it another way / In other words',
            topic: '同一主張，換更清楚的說法',
            level: 'B2',
            source: 'chunk',
            corePattern: 'To put it another way, + clause',
            baseSentence: 'To put it another way, speed comes before polish.',
            rhythm: 'to PUT it a-NO-ther WAY | SPEED comes | be-FORE POL-ish'
        }, {
            subs: [
                ['In other words', 'In other words, speed comes before polish.'],
                ['Put simply', 'Put simply, speed comes before polish.'],
                ['In short', 'In short, speed comes before polish.'],
                ['That is', 'That is, speed comes before polish.'],
                ['the reflex has to form first', 'To put it another way, the reflex has to form first.'],
                ['we should stop translating', 'To put it another way, we should stop translating.'],
                ['the drill is the gym, not the test', 'To put it another way, the drill is the gym, not the test.'],
                ['accuracy can wait', 'To put it another way, accuracy can wait.'],
                ['To put it bluntly', 'To put it bluntly, speed comes before polish.'],
                ['What this means is', 'What this means is speed comes before polish.'],
                ['the pattern must fire unaided', 'To put it another way, the pattern must fire unaided.'],
                ['more rules will not help here', 'To put it another way, more rules will not help here.'],
                ['we are training time, not knowledge', 'To put it another way, we are training time, not knowledge.'],
                ['the bottleneck is retrieval', 'To put it another way, the bottleneck is retrieval.'],
                ['fluency is a motor skill', 'To put it another way, fluency is a motor skill.']
            ],
            shadows: ['in O-ther WORDS | SPEED comes | be-FORE POL-ish', 'to PUT it a-NO-ther WAY | we should STOP | trans-LAT-ing', 'to PUT it a-NO-ther WAY | the BOT-tle-neck | is re-TRIE-val'],
            situation: ['剛講完理論，聽者一臉茫然。', 'To put it another way, speed comes before polish.'],
            trans: [
                ['改成 In other words', 'In other words, speed comes before polish.'],
                ['改成 Simply put', 'Simply put, speed comes before polish.']
            ],
            resps: [
                ['I am not sure I follow.', 'To put it another way, speed comes before polish.'],
                ['So what should we do first?', 'To put it another way, we should stop translating.']
            ],
            exps: [
                ['加上 in the first month', 'To put it another way, speed comes before polish in the first month.'],
                ['再加上 of spoken training', 'To put it another way, speed comes before polish in the first month of spoken training.']
            ]
        }),
        add({
            id: 'adv-in-light-of',
            title: '依據：In light of / Given this',
            topic: '根據剛講的事實調整立場',
            level: 'B2',
            source: 'academic',
            corePattern: 'In light of + noun, clause',
            baseSentence: 'In light of these results, we revised the claim.',
            rhythm: 'in LIGHT of | these re-SULTS | we re-VISED | the CLAIM'
        }, {
            subs: [
                ['the new data', 'In light of the new data, we revised the claim.'],
                ['this limitation', 'In light of this limitation, we revised the claim.'],
                ['what Smith found', 'In light of what Smith found, we revised the claim.'],
                ['Given this', 'Given this, we revised the claim.'],
                ['Against this background', 'Against this background, we revised the claim.'],
                ['we dropped the stronger version', 'In light of these results, we dropped the stronger version.'],
                ['a smaller effect is more plausible', 'In light of these results, a smaller effect is more plausible.'],
                ['the next study must be longer', 'In light of these results, the next study must be longer.'],
                ['I would not publish yet', 'In light of these results, I would not publish yet.'],
                ['the method still stands', 'In light of these results, the method still stands.'],
                ['the control needs changing', 'In light of these results, the control needs changing.'],
                ['caution is required', 'In light of these results, caution is required.'],
                ['the definition was too loose', 'In light of these results, the definition was too loose.'],
                ['we kept only trained items', 'In light of these results, we kept only trained items.'],
                ['the theory needs a boundary', 'In light of these results, the theory needs a boundary.']
            ],
            shadows: ['in LIGHT of | the NEW DA-ta | we re-VISED | the CLAIM', 'GIV-en THIS | we DROPPED | the STRONG-er VER-sion', 'in LIGHT of | these re-SULTS | CAU-tion | is re-QUIRED'],
            situation: ['第二個實驗推翻了原主張的強版。', 'In light of these results, we revised the claim.'],
            trans: [
                ['改成 Given these results', 'Given these results, we revised the claim.'],
                ['改成 Because of these results', 'Because of these results, we revised the claim.']
            ],
            resps: [
                ['Did the second study change anything?', 'In light of these results, we revised the claim.'],
                ['Would you still publish the strong version?', 'In light of these results, I would not publish yet.']
            ],
            exps: [
                ['加上 from Experiment 2', 'In light of these results from Experiment 2, we revised the claim.'],
                ['再加上 to a weaker form', 'In light of these results from Experiment 2, we revised the claim to a weaker form.']
            ]
        }),
        add({
            id: 'adv-not-so-much',
            title: '校正：It is not so much X as Y',
            topic: '真正的重點不是前者，是後者',
            level: 'C1',
            source: 'chunk',
            corePattern: "It's not so much X as Y",
            baseSentence: "It's not so much the grammar as the timing.",
            rhythm: "it's NOT so MUCH | the GRAM-mar | as the TIM-ing"
        }, {
            subs: [
                ['the words / the chunks', "It's not so much the words as the chunks."],
                ['knowledge / retrieval', "It's not so much knowledge as retrieval."],
                ['the idea / the execution', "It's not so much the idea as the execution."],
                ['talent / hours', "It's not so much talent as hours."],
                ['the error / the hesitation', "It's not so much the error as the hesitation."],
                ['what they know / how fast they use it', "It's not so much what they know as how fast they use it."],
                ['the tool / how we use it', "It's not so much the tool as how we use it."],
                ['the finding / the interpretation', "It's not so much the finding as the interpretation."],
                ['I do not object to the aim / the method', "It's not so much the aim as the method."],
                ['money / attention', "It's not so much money as attention."],
                ['the result / what we do next', "It's not so much the result as what we do next."],
                ['theory / operationalization', "It's not so much theory as operationalization."],
                ['the content / the pace', "It's not so much the content as the pace."],
                ['being wrong / being slow', "It's not so much being wrong as being slow."],
                ['the data / the claim we hang on them', "It's not so much the data as the claim we hang on them."]
            ],
            shadows: ["it's NOT so MUCH | KNOW-ledge | as re-TRIE-val", "it's NOT so MUCH | the ER-ror | as the hes-i-TA-tion", "it's NOT so MUCH | be-ing WRONG | as be-ing SLOW"],
            situation: ['對方一直在改文法，你覺得真正的問題是速度。', "It's not so much the grammar as the timing."],
            trans: [
                ['改成 The issue is Y rather than X', 'The issue is the timing rather than the grammar.'],
                ['改成 less X than Y', 'It is less the grammar than the timing.']
            ],
            resps: [
                ['So the grammar is the problem?', "It's not so much the grammar as the timing."],
                ['Do they not know the words?', "It's not so much the words as the chunks."]
            ],
            exps: [
                ['加上 in spontaneous speech', "It's not so much the grammar as the timing in spontaneous speech."],
                ['再加上 after the first month', "It's not so much the grammar as the timing in spontaneous speech after the first month."]
            ]
        }),
        add({
            id: 'adv-i-wouldnt-go-so-far',
            title: '降調：I would not go so far as to say',
            topic: '接受一部分，拒絕過滿的說法',
            level: 'C1',
            source: 'chunk',
            corePattern: "I wouldn't go so far as to say that + clause",
            baseSentence: "I wouldn't go so far as to say that the method failed.",
            rhythm: "I WOULDN'T go so FAR | as to SAY that | the ME-thod | FAILED"
        }, {
            subs: [
                ['this proves the theory', "I wouldn't go so far as to say that this proves the theory."],
                ['we should abandon it', "I wouldn't go so far as to say that we should abandon it."],
                ['the result is meaningless', "I wouldn't go so far as to say that the result is meaningless."],
                ['everyone must do this', "I wouldn't go so far as to say that everyone must do this."],
                ['the older view is dead', "I wouldn't go so far as to say that the older view is dead."],
                ['this is a breakthrough', "I wouldn't go so far as to say that this is a breakthrough."],
                ['the sample is useless', "I wouldn't go so far as to say that the sample is useless."],
                ['I fully agree', "I wouldn't go so far as to say that I fully agree."],
                ['the criticism is unfair', "I wouldn't go so far as to say that the criticism is unfair."],
                ['one study settles it', "I wouldn't go so far as to say that one study settles it."],
                ['teachers are wasting time', "I wouldn't go so far as to say that teachers are wasting time."],
                ['the effect is zero', "I wouldn't go so far as to say that the effect is zero."],
                ['this changes everything', "I wouldn't go so far as to say that this changes everything."],
                ['the paper should be rejected', "I wouldn't go so far as to say that the paper should be rejected."],
                ['we now understand the mechanism', "I wouldn't go so far as to say that we now understand the mechanism."]
            ],
            shadows: ["I WOULDN'T go so FAR | as to SAY that | this PROVES | the THE-o-ry", "I WOULDN'T go so FAR | as to SAY that | we should a-BAN-don it", "I WOULDN'T go so FAR | as to SAY that | ONE STU-dy | SET-tles it"],
            situation: ['對方把你的批評聽成全盤否定。', "I wouldn't go so far as to say that the method failed."],
            trans: [
                ['改成 I would not claim that', 'I would not claim that the method failed.'],
                ['改成 That overstates it', 'That overstates it.']
            ],
            resps: [
                ['So the method failed?', "I wouldn't go so far as to say that the method failed."],
                ['Does this prove the theory?', "I wouldn't go so far as to say that this proves the theory."]
            ],
            exps: [
                ['加上 outright', "I wouldn't go so far as to say that the method failed outright."],
                ['再加上 on the basis of this trial', "I wouldn't go so far as to say that the method failed outright on the basis of this trial."]
            ]
        }),
        add({
            id: 'adv-take-your-point',
            title: '對談：I take your point, but',
            topic: '先接住對方，再把話轉回',
            level: 'B2',
            source: 'spoken',
            corePattern: 'I take your point, but + clause',
            baseSentence: 'I take your point, but the timing still matters.',
            rhythm: 'I TAKE your POINT | but the TIM-ing | still MAT-ters'
        }, {
            subs: [
                ['the sample is still small', 'I take your point, but the sample is still small.'],
                ['we still need a control', 'I take your point, but we still need a control.'],
                ['that does not kill the weaker claim', 'I take your point, but that does not kill the weaker claim.'],
                ['Fair enough, but', 'Fair enough, but the timing still matters.'],
                ['I see what you mean, but', 'I see what you mean, but the timing still matters.'],
                ['Point taken, but', 'Point taken, but the timing still matters.'],
                ['that is not the bottleneck', 'I take your point, but that is not the bottleneck.'],
                ['we have not tested transfer', 'I take your point, but we have not tested transfer.'],
                ['the practical question remains', 'I take your point, but the practical question remains.'],
                ['I would still keep the drill', 'I take your point, but I would still keep the drill.'],
                ['the definition is still loose', 'I take your point, but the definition is still loose.'],
                ['one counterexample is not enough', 'I take your point, but one counterexample is not enough.'],
                ['we are talking about different levels', 'I take your point, but we are talking about different levels.'],
                ['the cost has not been priced in', 'I take your point, but the cost has not been priced in.'],
                ['the next step is still a replication', 'I take your point, but the next step is still a replication.']
            ],
            shadows: ['I TAKE your POINT | but the SAM-ple | is STILL SMALL', 'POINT TAK-en | but the TIM-ing | still MAT-ters', 'I SEE what you MEAN | but that is NOT | the BOT-tle-neck'],
            situation: ['研討會上對方抓到一個限制，你不完全讓步。', 'I take your point, but the timing still matters.'],
            trans: [
                ['改成 I agree up to a point, but', 'I agree up to a point, but the timing still matters.'],
                ['改成 That is fair, however', 'That is fair; however, the timing still matters.']
            ],
            resps: [
                ['Your sample is tiny.', 'I take your point, but the timing still matters.'],
                ['Drills are old-fashioned.', 'I take your point, but I would still keep the drill.']
            ],
            exps: [
                ['加上 in the first weeks', 'I take your point, but the timing still matters in the first weeks.'],
                ['再加上 more than the total hours', 'I take your point, but the timing still matters in the first weeks more than the total hours.']
            ]
        }),
        add({
            id: 'adv-let-me-put-it',
            title: '重述：Let me put it this way',
            topic: '換一條更短的路把意思講清楚',
            level: 'B2',
            source: 'spoken',
            corePattern: 'Let me put it this way: + clause',
            baseSentence: 'Let me put it this way: if you hesitate, you translate.',
            rhythm: 'let me PUT it | THIS WAY | if you HES-i-tate | you trans-LATE'
        }, {
            subs: [
                ['the clock is the teacher', 'Let me put it this way: the clock is the teacher.'],
                ['you cannot think your way to fluency', 'Let me put it this way: you cannot think your way to fluency.'],
                ['slow and correct is still slow', 'Let me put it this way: slow and correct is still slow.'],
                ['Let me put it differently', 'Let me put it differently: if you hesitate, you translate.'],
                ['Here is the short version', 'Here is the short version: if you hesitate, you translate.'],
                ['the pattern has to fire unaided', 'Let me put it this way: the pattern has to fire unaided.'],
                ['three seconds is the point', 'Let me put it this way: three seconds is the point.'],
                ['knowledge without speed is unused', 'Let me put it this way: knowledge without speed is unused.'],
                ['we are training a reflex', 'Let me put it this way: we are training a reflex.'],
                ['the cue must beat the translation', 'Let me put it this way: the cue must beat the translation.'],
                ['polish comes after automaticity', 'Let me put it this way: polish comes after automaticity.'],
                ['you do not negotiate with the timer', 'Let me put it this way: you do not negotiate with the timer.'],
                ['a perfect sentence that arrives late has failed', 'Let me put it this way: a perfect sentence that arrives late has failed.'],
                ['the gym is the drill, the game is conversation', 'Let me put it this way: the gym is the drill, the game is conversation.'],
                ['if it is not fast, it is not fluent', 'Let me put it this way: if it is not fast, it is not fluent.']
            ],
            shadows: ['let me PUT it | THIS WAY | we are TRAIN-ing | a RE-flex', 'let me PUT it | THIS WAY | THREE SEC-onds | is the POINT', 'let me PUT it | THIS WAY | if it is NOT FAST | it is NOT FLU-ent'],
            situation: ['解釋為什麼 3 秒到了還要重來。', 'Let me put it this way: if you hesitate, you translate.'],
            trans: [
                ['改成 In short', 'In short, if you hesitate, you translate.'],
                ['改成 The point is', 'The point is, if you hesitate, you translate.']
            ],
            resps: [
                ['Why be so strict about three seconds?', 'Let me put it this way: if you hesitate, you translate.'],
                ['Is this not just grammar practice?', 'Let me put it this way: we are training a reflex.']
            ],
            exps: [
                ['加上 in the first weeks', 'Let me put it this way: if you hesitate, you translate in the first weeks.'],
                ['再加上 of spoken training', 'Let me put it this way: if you hesitate, you translate in the first weeks of spoken training.']
            ]
        }),
        add({
            id: 'adv-as-far-as-i-can-tell',
            title: '限度：As far as I can tell / For all I know',
            topic: '把自己的確定範圍講小',
            level: 'B2',
            source: 'chunk',
            corePattern: 'As far as I can tell, + clause',
            baseSentence: 'As far as I can tell, the file never arrived.',
            rhythm: 'as FAR as I can TELL | the FILE | NEV-er ar-RIVED'
        }, {
            subs: [
                ['nobody has checked', 'As far as I can tell, nobody has checked.'],
                ['this is the latest draft', 'As far as I can tell, this is the latest draft.'],
                ['the meeting is still on', 'As far as I can tell, the meeting is still on.'],
                ['For all I know', 'For all I know, the file never arrived.'],
                ['From what I have seen', 'From what I have seen, the file never arrived.'],
                ['To the best of my knowledge', 'To the best of my knowledge, the file never arrived.'],
                ['the numbers have not been updated', 'As far as I can tell, the numbers have not been updated.'],
                ['she has not replied', 'As far as I can tell, she has not replied.'],
                ['we are the only team using this', 'As far as I can tell, we are the only team using this.'],
                ['the error started yesterday', 'As far as I can tell, the error started yesterday.'],
                ['nothing has changed', 'As far as I can tell, nothing has changed.'],
                ['this copy is complete', 'As far as I can tell, this copy is complete.'],
                ['they still expect us at nine', 'As far as I can tell, they still expect us at nine.'],
                ['the claim has not been tested here', 'As far as I can tell, the claim has not been tested here.'],
                ['we are missing one appendix', 'As far as I can tell, we are missing one appendix.']
            ],
            shadows: ['as FAR as I can TELL | NO-bod-y | has CHECKED', 'to the BEST of my KNOW-ledge | the FILE | NEV-er ar-RIVED', 'from WHAT I have SEEN | NOTH-ing | has CHANGED'],
            situation: ['有人問檔案到了沒，你無法百分之百保證。', 'As far as I can tell, the file never arrived.'],
            trans: [
                ['改成 I am not certain, but', 'I am not certain, but the file never arrived.'],
                ['改成 To the best of my knowledge', 'To the best of my knowledge, the file never arrived.']
            ],
            resps: [
                ['Did the file arrive?', 'As far as I can tell, the file never arrived.'],
                ['Has anyone checked this?', 'As far as I can tell, nobody has checked.']
            ],
            exps: [
                ['加上 this morning', 'As far as I can tell, the file never arrived this morning.'],
                ['再加上 on either account', 'As far as I can tell, the file never arrived this morning on either account.']
            ]
        }),
        add({
            id: 'adv-much-as',
            title: '讓步：Much as I would like to',
            topic: '再想做也做不到',
            level: 'C1',
            source: 'spoken',
            corePattern: 'Much as I would like to + verb, clause',
            baseSentence: 'Much as I would like to help, I cannot stay.',
            rhythm: 'MUCH as I would LIKE to HELP | I can-NOT | STAY'
        }, {
            subs: [
                ['join you', 'Much as I would like to join you, I cannot stay.'],
                ['agree', 'Much as I would like to agree, I cannot stay.'],
                ['say yes', 'Much as I would like to say yes, I cannot stay.'],
                ['Hard as it is to admit', 'Hard as it is to admit, I cannot stay.'],
                ['Try as I might', 'Try as I might, I cannot stay.'],
                ['I have another meeting', 'Much as I would like to help, I have another meeting.'],
                ['the data are not ready', 'Much as I would like to help, the data are not ready.'],
                ['this is not my decision', 'Much as I would like to help, this is not my decision.'],
                ['I was not there', 'Much as I would like to help, I was not there.'],
                ['we would miss the deadline', 'Much as I would like to help, we would miss the deadline.'],
                ['I do not have the file', 'Much as I would like to help, I do not have the file.'],
                ['the rule is clear', 'Much as I would like to help, the rule is clear.'],
                ['I am already committed', 'Much as I would like to help, I am already committed.'],
                ['it would set a bad precedent', 'Much as I would like to help, it would set a bad precedent.'],
                ['I cannot defend that claim', 'Much as I would like to help, I cannot defend that claim.']
            ],
            shadows: ['MUCH as I would LIKE to HELP | I have a-NO-ther | MEE-ting', 'HARD as it is to ad-MIT | I can-NOT | STAY', 'TRY as I MIGHT | I can-NOT | STAY'],
            situation: ['朋友要你留下來加班，你真的走不開。', 'Much as I would like to help, I cannot stay.'],
            trans: [
                ['改成 Although I would like to', 'Although I would like to help, I cannot stay.'],
                ['改成 I would like to, but', 'I would like to help, but I cannot stay.']
            ],
            resps: [
                ['Can you stay and finish this?', 'Much as I would like to help, I cannot stay.'],
                ['Will you support that claim?', 'Much as I would like to help, I cannot defend that claim.']
            ],
            exps: [
                ['加上 tonight', 'Much as I would like to help, I cannot stay tonight.'],
                ['再加上 because I have another meeting', 'Much as I would like to help, I cannot stay tonight because I have another meeting.']
            ]
        }),
        add({
            id: 'adv-no-getting-around',
            title: '無法迴避：There is no getting around the fact that',
            topic: '不管怎樣，這件事仍在',
            level: 'C1',
            source: 'chunk',
            corePattern: "There's no getting around the fact that + clause",
            baseSentence: "There's no getting around the fact that the sample is small.",
            rhythm: "there's NO GET-ting a-ROUND | the FACT that | the SAM-ple | is SMALL"
        }, {
            subs: [
                ['we were late', "There's no getting around the fact that we were late."],
                ['the effect is tiny', "There's no getting around the fact that the effect is tiny."],
                ['the control also improved', "There's no getting around the fact that the control also improved."],
                ['The fact remains that', 'The fact remains that the sample is small.'],
                ['Like it or not', 'Like it or not, the sample is small.'],
                ['One cannot escape the fact that', 'One cannot escape the fact that the sample is small.'],
                ['we still lack a replication', "There's no getting around the fact that we still lack a replication."],
                ['the definition shifted', "There's no getting around the fact that the definition shifted."],
                ['people hesitated', "There's no getting around the fact that people hesitated."],
                ['the deadline was missed', "There's no getting around the fact that the deadline was missed."],
                ['this is only one study', "There's no getting around the fact that this is only one study."],
                ['the groups were unequal', "There's no getting around the fact that the groups were unequal."],
                ['the claim outruns the data', "There's no getting around the fact that the claim outruns the data."],
                ['we have not tested transfer', "There's no getting around the fact that we have not tested transfer."],
                ['the cost is real', "There's no getting around the fact that the cost is real."]
            ],
            shadows: ["there's NO GET-ting a-ROUND | the FACT that | the ef-FECT | is TI-ny", 'the FACT re-MAINS that | the SAM-ple | is SMALL', "there's NO GET-ting a-ROUND | the FACT that | the CLAIM | out-RUNS | the DA-ta"],
            situation: ['對方一直繞開樣本太小這件事。', "There's no getting around the fact that the sample is small."],
            trans: [
                ['改成 The fact remains that', 'The fact remains that the sample is small.'],
                ['改成 We still have to face', 'We still have to face the fact that the sample is small.']
            ],
            resps: [
                ['Can we ignore the sample size?', "There's no getting around the fact that the sample is small."],
                ['Is the effect large enough?', "There's no getting around the fact that the effect is tiny."]
            ],
            exps: [
                ['加上 even after cleaning the data', "There's no getting around the fact that the sample is small even after cleaning the data."],
                ['再加上 and hard to generalize', "There's no getting around the fact that the sample is small even after cleaning the data and hard to generalize."]
            ]
        }),
        add({
            id: 'adv-when-it-comes-down',
            title: '收束：When it comes down to it',
            topic: '去掉修飾，真正剩下什麼',
            level: 'B2',
            source: 'chunk',
            corePattern: 'When it comes down to it, + clause',
            baseSentence: 'When it comes down to it, we are short on time.',
            rhythm: 'when it COMES DOWN to it | we are SHORT | on TIME'
        }, {
            subs: [
                ['the students need speed', 'When it comes down to it, the students need speed.'],
                ['we do not have a control', 'When it comes down to it, we do not have a control.'],
                ['this is a retrieval problem', 'When it comes down to it, this is a retrieval problem.'],
                ['At the end of the day', 'At the end of the day, we are short on time.'],
                ['In the end', 'In the end, we are short on time.'],
                ['What it comes down to is', 'What it comes down to is time.'],
                ['the claim is still too big', 'When it comes down to it, the claim is still too big.'],
                ['we are guessing', 'When it comes down to it, we are guessing.'],
                ['the drill has to be daily', 'When it comes down to it, the drill has to be daily.'],
                ['nobody has run the numbers', 'When it comes down to it, nobody has run the numbers.'],
                ['I would keep the timer', 'When it comes down to it, I would keep the timer.'],
                ['the paper needs a weaker title', 'When it comes down to it, the paper needs a weaker title.'],
                ['we taught recognition, not production', 'When it comes down to it, we taught recognition, not production.'],
                ['the bottleneck is still three seconds', 'When it comes down to it, the bottleneck is still three seconds.'],
                ['they can explain it but cannot say it', 'When it comes down to it, they can explain it but cannot say it.']
            ],
            shadows: ['when it COMES DOWN to it | this is a re-TRIE-val | PROB-lem', 'at the END of the DAY | we are SHORT | on TIME', 'when it COMES DOWN to it | I would KEEP | the TI-mer'],
            situation: ['會議繞太遠，你把核心問題收回來。', 'When it comes down to it, we are short on time.'],
            trans: [
                ['改成 At the end of the day', 'At the end of the day, we are short on time.'],
                ['改成 The real issue is', 'The real issue is that we are short on time.']
            ],
            resps: [
                ['We have discussed ten issues. What is the real one?', 'When it comes down to it, we are short on time.'],
                ['Do they know the grammar?', 'When it comes down to it, they can explain it but cannot say it.']
            ],
            exps: [
                ['加上 this week', 'When it comes down to it, we are short on time this week.'],
                ['再加上 and the timer cannot wait', 'When it comes down to it, we are short on time this week and the timer cannot wait.']
            ]
        }),
        add({
            id: 'adv-having-pp',
            title: '分詞：Having + 過去分詞',
            topic: '先完成一事，再接後果',
            level: 'C1',
            source: 'fsi',
            corePattern: 'Having + past participle, clause',
            baseSentence: 'Having checked the numbers, we dropped the claim.',
            rhythm: 'HAV-ing CHECKED | the NUM-bers | we DROPPED | the CLAIM'
        }, {
            subs: [
                ['read the reviews', 'Having read the reviews, we dropped the claim.'],
                ['seen the control data', 'Having seen the control data, we dropped the claim.'],
                ['failed twice', 'Having failed twice, we dropped the claim.'],
                ['I changed my mind', 'Having checked the numbers, I changed my mind.'],
                ['they started over', 'Having checked the numbers, they started over.'],
                ['we kept only two items', 'Having checked the numbers, we kept only two items.'],
                ['Having said that', 'Having said that, we dropped the claim.'],
                ['Having been warned', 'Having been warned, we dropped the claim.'],
                ['Having spent a year on this', 'Having spent a year on this, we dropped the claim.'],
                ['the team split', 'Having checked the numbers, the team split.'],
                ['I would not repeat it', 'Having checked the numbers, I would not repeat it.'],
                ['we wrote a weaker abstract', 'Having checked the numbers, we wrote a weaker abstract.'],
                ['she refused to sign', 'Having checked the numbers, she refused to sign.'],
                ['we delayed publication', 'Having checked the numbers, we delayed publication.'],
                ['I trust the smaller effect', 'Having checked the numbers, I trust the smaller effect.']
            ],
            shadows: ['HAV-ing SEEN | the con-TROL DA-ta | we DROPPED | the CLAIM', 'HAV-ing CHECKED | the NUM-bers | we de-LAYED | pub-li-CA-tion', 'HAV-ing SPENT | a YEAR on this | we DROPPED | the CLAIM'],
            situation: ['複核數據後，你決定收回強主張。', 'Having checked the numbers, we dropped the claim.'],
            trans: [
                ['改成 After we checked', 'After we checked the numbers, we dropped the claim.'],
                ['改成 Once we had checked', 'Once we had checked the numbers, we dropped the claim.']
            ],
            resps: [
                ['Why did you weaken the abstract?', 'Having checked the numbers, we dropped the claim.'],
                ['Why delay publication?', 'Having checked the numbers, we delayed publication.']
            ],
            exps: [
                ['加上 from Experiment 2', 'Having checked the numbers from Experiment 2, we dropped the claim.'],
                ['再加上 and warned the coauthors', 'Having checked the numbers from Experiment 2, we dropped the claim and warned the coauthors.']
            ]
        }),
        add({
            id: 'adv-rather-than-ving',
            title: '取捨：rather than + V-ing',
            topic: '不做甲，改做乙',
            level: 'B2',
            source: 'chunk',
            corePattern: 'Rather than + V-ing, clause',
            baseSentence: 'Rather than adding more rules, we timed the drill.',
            rhythm: 'RA-ther than ADD-ing | more RULES | we TIMED | the DRILL'
        }, {
            subs: [
                ['translating each line', 'Rather than translating each line, we timed the drill.'],
                ['waiting for accuracy', 'Rather than waiting for accuracy, we timed the drill.'],
                ['explaining the grammar again', 'Rather than explaining the grammar again, we timed the drill.'],
                ['Instead of adding more rules', 'Instead of adding more rules, we timed the drill.'],
                ['we cut the list', 'Rather than adding more rules, we cut the list.'],
                ['we asked for speed', 'Rather than adding more rules, we asked for speed.'],
                ['we kept the same twenty items', 'Rather than adding more rules, we kept the same twenty items.'],
                ['marking every error', 'Rather than marking every error, we timed the drill.'],
                ['changing the materials', 'Rather than changing the materials, we timed the drill.'],
                ['I would keep the timer', 'Rather than adding more rules, I would keep the timer.'],
                ['starting a new unit', 'Rather than starting a new unit, we timed the drill.'],
                ['arguing about terms', 'Rather than arguing about terms, we timed the drill.'],
                ['we measured hesitation', 'Rather than adding more rules, we measured hesitation.'],
                ['we repeated yesterday’s set', 'Rather than adding more rules, we repeated yesterday’s set.'],
                ['lengthening the session', 'Rather than lengthening the session, we timed the drill.']
            ],
            shadows: ['RA-ther than trans-LAT-ing | each LINE | we TIMED | the DRILL', 'in-STEAD of ADD-ing | more RULES | we TIMED | the DRILL', 'RA-ther than WAIT-ing | for ac-cu-ra-CY | we TIMED | the DRILL'],
            situation: ['學生一直要新文法，你堅持先練速度。', 'Rather than adding more rules, we timed the drill.'],
            trans: [
                ['改成 Instead of', 'Instead of adding more rules, we timed the drill.'],
                ['改成 We did Y, not X', 'We timed the drill; we did not add more rules.']
            ],
            resps: [
                ['Should we teach another tense today?', 'Rather than adding more rules, we timed the drill.'],
                ['Do you want a new unit?', 'Rather than starting a new unit, we timed the drill.']
            ],
            exps: [
                ['加上 for fifteen minutes', 'Rather than adding more rules, we timed the drill for fifteen minutes.'],
                ['再加上 on the same twenty items', 'Rather than adding more rules, we timed the drill for fifteen minutes on the same twenty items.']
            ]
        }),
        add({
            id: 'adv-no-matter-how',
            title: '不論：No matter how / However + 形容詞',
            topic: '程度再高也不改變後句',
            level: 'B2',
            source: 'fsi',
            corePattern: 'No matter how + adj/adv, clause',
            baseSentence: 'No matter how careful we are, some error remains.',
            rhythm: 'no MAT-ter how CARE-ful | we ARE | some ER-ror | re-MAINS'
        }, {
            subs: [
                ['clear the explanation is', 'No matter how clear the explanation is, some error remains.'],
                ['often we repeat it', 'No matter how often we repeat it, some error remains.'],
                ['hard they try', 'No matter how hard they try, some error remains.'],
                ['However careful we are', 'However careful we are, some error remains.'],
                ['Whatever we do', 'Whatever we do, some error remains.'],
                ['the hesitation stays', 'No matter how careful we are, the hesitation stays.'],
                ['transfer is limited', 'No matter how careful we are, transfer is limited.'],
                ['people still translate', 'No matter how careful we are, people still translate.'],
                ['long the session is', 'No matter how long the session is, some error remains.'],
                ['simple the pattern looks', 'No matter how simple the pattern looks, some error remains.'],
                ['much they know', 'No matter how much they know, some error remains.'],
                ['fast the cue is', 'No matter how fast the cue is, some error remains.'],
                ['we still need a timer', 'No matter how careful we are, we still need a timer.'],
                ['the first seconds decide it', 'No matter how careful we are, the first seconds decide it.'],
                ['Whichever method we pick', 'Whichever method we pick, some error remains.']
            ],
            shadows: ['no MAT-ter how HARD | they TRY | some ER-ror | re-MAINS', 'how-EV-er CARE-ful we ARE | peo-ple STILL | trans-LATE', 'no MAT-ter how MUCH | they KNOW | some ER-ror | re-MAINS'],
            situation: ['有人以為講得夠清楚，錯就會消失。', 'No matter how careful we are, some error remains.'],
            trans: [
                ['改成 However + adj', 'However careful we are, some error remains.'],
                ['改成 Even if we are careful', 'Even if we are careful, some error remains.']
            ],
            resps: [
                ['If we explain it better, will the errors stop?', 'No matter how careful we are, some error remains.'],
                ['They know the rule. Why hesitate?', 'No matter how much they know, some error remains.']
            ],
            exps: [
                ['加上 in the first seconds', 'No matter how careful we are, some error remains in the first seconds.'],
                ['再加上 of spontaneous speech', 'No matter how careful we are, some error remains in the first seconds of spontaneous speech.']
            ]
        }),
        add({
            id: 'adv-as-if',
            title: '虛擬比擬：as if / as though',
            topic: '說得像真的，其實不是',
            level: 'B2',
            source: 'fsi',
            corePattern: 'clause + as if + unreal past',
            baseSentence: 'He talks as if he had run the study.',
            rhythm: 'he TALKS | as if he had RUN | the STU-dy'
        }, {
            subs: [
                ['he owned the data', 'He talks as if he owned the data.'],
                ['the question were settled', 'He talks as if the question were settled.'],
                ['we had unlimited time', 'He talks as if we had unlimited time.'],
                ['as though', 'He talks as though he had run the study.'],
                ['She writes', 'She writes as if she had run the study.'],
                ['They act', 'They act as if they had run the study.'],
                ['this were a finished theory', 'He talks as if this were a finished theory.'],
                ['nobody else had tried', 'He talks as if nobody else had tried.'],
                ['the sample were huge', 'He talks as if the sample were huge.'],
                ['I look', 'I look as if I had run the study.'],
                ['the timer did not matter', 'He talks as if the timer did not matter.'],
                ['transfer were automatic', 'He talks as if transfer were automatic.'],
                ['we already knew the mechanism', 'He talks as if we already knew the mechanism.'],
                ['one paper closed the case', 'He talks as if one paper closed the case.'],
                ['It sounds', 'It sounds as if he had run the study.']
            ],
            shadows: ['he TALKS | as if the QUES-tion | were SET-tled', 'he TALKS | as if we had un-LIM-it-ed | TIME', 'it SOUNDS | as if he had RUN | the STU-dy'],
            situation: ['有人把別人的實驗講成自己做的。', 'He talks as if he had run the study.'],
            trans: [
                ['改成 like（口語）', 'He talks like he ran the study.'],
                ['改成 though he did not', 'He talks as if he had run the study, though he did not.']
            ],
            resps: [
                ['Why are you annoyed?', 'He talks as if he had run the study.'],
                ['Is the question settled?', 'He talks as if the question were settled.']
            ],
            exps: [
                ['加上 in the meeting', 'He talks as if he had run the study in the meeting.'],
                ['再加上 though he only read the abstract', 'He talks as if he had run the study in the meeting, though he only read the abstract.']
            ]
        }),
        add({
            id: 'adv-suffice-it-to-say',
            title: '收束：Suffice it to say',
            topic: '細節略過，只留必要的一句',
            level: 'C1',
            source: 'chunk',
            corePattern: 'Suffice it to say that + clause',
            baseSentence: 'Suffice it to say that the first draft failed.',
            rhythm: 'suf-FICE it to SAY that | the FIRST DRAFT | FAILED'
        }, {
            subs: [
                ['we were not ready', 'Suffice it to say that we were not ready.'],
                ['the meeting did not go well', 'Suffice it to say that the meeting did not go well.'],
                ['I will not make that mistake again', 'Suffice it to say that I will not make that mistake again.'],
                ['the numbers did not survive review', 'Suffice it to say that the numbers did not survive review.'],
                ['nobody left convinced', 'Suffice it to say that nobody left convinced.'],
                ['the timer exposed everything', 'Suffice it to say that the timer exposed everything.'],
                ['we rewrote the method', 'Suffice it to say that we rewrote the method.'],
                ['the claim had to shrink', 'Suffice it to say that the claim had to shrink.'],
                ['I have learned to wait', 'Suffice it to say that I have learned to wait.'],
                ['the second version is quieter', 'Suffice it to say that the second version is quieter.'],
                ['we kept the drill and cut the lecture', 'Suffice it to say that we kept the drill and cut the lecture.'],
                ['the silence after the result was long', 'Suffice it to say that the silence after the result was long.'],
                ['I no longer trust first impressions', 'Suffice it to say that I no longer trust first impressions.'],
                ['the control saved us', 'Suffice it to say that the control saved us.'],
                ['we will not publish that figure', 'Suffice it to say that we will not publish that figure.']
            ],
            shadows: ['suf-FICE it to SAY that | the MEE-ting | did NOT | go WELL', 'suf-FICE it to SAY that | the CLAIM | had to SHRINK', 'suf-FICE it to SAY that | the con-TROL | SAVED us'],
            situation: ['有人不想聽完整失敗過程，只要結論。', 'Suffice it to say that the first draft failed.'],
            trans: [
                ['改成 I will just say that', 'I will just say that the first draft failed.'],
                ['改成 The short version is', 'The short version is that the first draft failed.']
            ],
            resps: [
                ['Do we need the whole story?', 'Suffice it to say that the first draft failed.'],
                ['What happened in review?', 'Suffice it to say that the numbers did not survive review.']
            ],
            exps: [
                ['加上 on the key measure', 'Suffice it to say that the first draft failed on the key measure.'],
                ['再加上 and had to be rebuilt', 'Suffice it to say that the first draft failed on the key measure and had to be rebuilt.']
            ]
        }),
        add({
            id: 'adv-for-the-sake-of',
            title: '假設：For the sake of argument',
            topic: '先接受前提，再看推論去哪',
            level: 'C1',
            source: 'academic',
            corePattern: 'For the sake of argument, + clause',
            baseSentence: 'For the sake of argument, assume the effect is real.',
            rhythm: 'for the SAKE of AR-gu-ment | as-SUME | the ef-FECT | is REAL'
        }, {
            subs: [
                ['grant that the sample is fine', 'For the sake of argument, grant that the sample is fine.'],
                ['suppose transfer occurs', 'For the sake of argument, suppose transfer occurs.'],
                ['let the stronger claim stand', 'For the sake of argument, let the stronger claim stand.'],
                ['Assume, for now,', 'Assume, for now, the effect is real.'],
                ['Even if we grant this', 'Even if we grant this, assume the effect is real.'],
                ['what follows?', 'For the sake of argument, assume the effect is real. What follows?'],
                ['the timer still matters', 'For the sake of argument, assume the effect is real; the timer still matters.'],
                ['we still need a control', 'For the sake of argument, assume the effect is real; we still need a control.'],
                ['the definition is still loose', 'For the sake of argument, assume the effect is real; the definition is still loose.'],
                ['take their number as given', 'For the sake of argument, take their number as given.'],
                ['ignore the missing items', 'For the sake of argument, ignore the missing items.'],
                ['treat the two groups as equal', 'For the sake of argument, treat the two groups as equal.'],
                ['the practical problem remains', 'For the sake of argument, assume the effect is real; the practical problem remains.'],
                ['I still would not scale it', 'For the sake of argument, assume the effect is real; I still would not scale it.'],
                ['the mechanism is still unknown', 'For the sake of argument, assume the effect is real; the mechanism is still unknown.']
            ],
            shadows: ['for the SAKE of AR-gu-ment | as-SUME | the ef-FECT | is REAL', 'for the SAKE of AR-gu-ment | we STILL NEED | a con-TROL', 'as-SUME for NOW | the ef-FECT | is REAL'],
            situation: ['你暫時接受對方前提，再指出下一步仍缺東西。', 'For the sake of argument, assume the effect is real.'],
            trans: [
                ['改成 Even if we grant that', 'Even if we grant that the effect is real, we still need a control.'],
                ['改成 Suppose that', 'Suppose that the effect is real.']
            ],
            resps: [
                ['Just accept that it works.', 'For the sake of argument, assume the effect is real; we still need a control.'],
                ['Can we move on from the sample?', 'For the sake of argument, grant that the sample is fine.']
            ],
            exps: [
                ['加上 for a moment', 'For the sake of argument, assume the effect is real for a moment.'],
                ['再加上 ; we still need a control', 'For the sake of argument, assume the effect is real for a moment; we still need a control.']
            ]
        }),
        add({
            id: 'adv-all-else-equal',
            title: '控制：All else being equal',
            topic: '其他條件不變時，只動這一個因素',
            level: 'C1',
            source: 'academic',
            corePattern: 'All else being equal, + clause',
            baseSentence: 'All else being equal, shorter cues are better.',
            rhythm: 'ALL else BE-ing E-qual | SHORT-er CUES | are BET-ter'
        }, {
            subs: [
                ['daily practice beats weekend blocks', 'All else being equal, daily practice beats weekend blocks.'],
                ['the trained items win', 'All else being equal, the trained items win.'],
                ['speed should come first', 'All else being equal, speed should come first.'],
                ['Other things equal', 'Other things equal, shorter cues are better.'],
                ['Holding time constant', 'Holding time constant, shorter cues are better.'],
                ['a familiar pattern is faster', 'All else being equal, a familiar pattern is faster.'],
                ['spoken production lags recognition', 'All else being equal, spoken production lags recognition.'],
                ['the first seconds decide it', 'All else being equal, the first seconds decide it.'],
                ['fewer items with more reps win', 'All else being equal, fewer items with more reps win.'],
                ['hesitation predicts later failure', 'All else being equal, hesitation predicts later failure.'],
                ['the simpler frame is enough', 'All else being equal, the simpler frame is enough.'],
                ['immediate recall beats delayed explanation', 'All else being equal, immediate recall beats delayed explanation.'],
                ['I would keep the timer', 'All else being equal, I would keep the timer.'],
                ['transfer remains limited', 'All else being equal, transfer remains limited.'],
                ['the cheaper design is preferable', 'All else being equal, the cheaper design is preferable.']
            ],
            shadows: ['ALL else BE-ing E-qual | DAI-ly PRAC-tice | BEATS week-END | BLOCKS', 'HOLD-ing TIME con-stant | SHORT-er CUES | are BET-ter', 'ALL else BE-ing E-qual | I would KEEP | the TI-mer'],
            situation: ['比較兩種練習，先假設時間和其他條件一樣。', 'All else being equal, shorter cues are better.'],
            trans: [
                ['改成 If nothing else changes', 'If nothing else changes, shorter cues are better.'],
                ['改成 Holding other factors constant', 'Holding other factors constant, shorter cues are better.']
            ],
            resps: [
                ['Which cue style should we use?', 'All else being equal, shorter cues are better.'],
                ['Massed or daily?', 'All else being equal, daily practice beats weekend blocks.']
            ],
            exps: [
                ['加上 in the first month', 'All else being equal, shorter cues are better in the first month.'],
                ['再加上 of spoken drills', 'All else being equal, shorter cues are better in the first month of spoken drills.']
            ]
        }),
        add({
            id: 'adv-crux',
            title: '核心：The crux of the matter is',
            topic: '把真正的爭執點點名',
            level: 'C1',
            source: 'chunk',
            corePattern: 'The crux of the matter is + noun/that-clause',
            baseSentence: 'The crux of the matter is retrieval speed.',
            rhythm: 'the CRUX of the MAT-ter | is re-TRIE-val | SPEED'
        }, {
            subs: [
                ['whether the timer is fair', 'The crux of the matter is whether the timer is fair.'],
                ['that they still translate', 'The crux of the matter is that they still translate.'],
                ['the missing control', 'The crux of the matter is the missing control.'],
                ['The heart of the issue is', 'The heart of the issue is retrieval speed.'],
                ['What is at stake is', 'What is at stake is retrieval speed.'],
                ['The real question is', 'The real question is retrieval speed.'],
                ['how we count a successful trial', 'The crux of the matter is how we count a successful trial.'],
                ['not the number of rules', 'The crux of the matter is not the number of rules.'],
                ['whether this transfers at all', 'The crux of the matter is whether this transfers at all.'],
                ['the first three seconds', 'The crux of the matter is the first three seconds.'],
                ['that the claim outruns the design', 'The crux of the matter is that the claim outruns the design.'],
                ['who decides what fluent means', 'The crux of the matter is who decides what fluent means.'],
                ['a mismatch between test and training', 'The crux of the matter is a mismatch between test and training.'],
                ['that we rewarded slow accuracy', 'The crux of the matter is that we rewarded slow accuracy.'],
                ['what happens when the cue disappears', 'The crux of the matter is what happens when the cue disappears.']
            ],
            shadows: ['the CRUX of the MAT-ter | is that they STILL | trans-LATE', 'the REAL QUES-tion is | re-TRIE-val | SPEED', 'the CRUX of the MAT-ter | is the FIRST | THREE SEC-onds'],
            situation: ['雙方爭了很多細節，你把爭執點收回來。', 'The crux of the matter is retrieval speed.'],
            trans: [
                ['改成 The real question is', 'The real question is retrieval speed.'],
                ['改成 What is at stake is', 'What is at stake is retrieval speed.']
            ],
            resps: [
                ['We keep arguing. What is the actual issue?', 'The crux of the matter is retrieval speed.'],
                ['Why do they still freeze?', 'The crux of the matter is that they still translate.']
            ],
            exps: [
                ['加上 not vocabulary size', 'The crux of the matter is retrieval speed, not vocabulary size.'],
                ['再加上 in the first three seconds', 'The crux of the matter is retrieval speed, not vocabulary size, in the first three seconds.']
            ]
        }),
        add({
            id: 'adv-i-might-as-well',
            title: '索性：I might as well + 動詞',
            topic: '沒更好選擇，就做這個',
            level: 'B2',
            source: 'spoken',
            corePattern: 'I might as well + verb',
            baseSentence: 'I might as well start over.',
            rhythm: 'I might as WELL | START | O-ver'
        }, {
            subs: [
                ['tell them now', 'I might as well tell them now.'],
                ['wait here', 'I might as well wait here.'],
                ['send the weaker version', 'I might as well send the weaker version.'],
                ['cut the last section', 'I might as well cut the last section.'],
                ['ask the hard question', 'I might as well ask the hard question.'],
                ['keep the timer', 'I might as well keep the timer.'],
                ['leave the draft as it is', 'I might as well leave the draft as it is.'],
                ['We might as well', 'We might as well start over.'],
                ['You might as well', 'You might as well start over.'],
                ['admit the gap', 'I might as well admit the gap.'],
                ['run one more trial', 'I might as well run one more trial.'],
                ['say no today', 'I might as well say no today.'],
                ['walk through the numbers again', 'I might as well walk through the numbers again.'],
                ['treat this as a pilot', 'I might as well treat this as a pilot.'],
                ['stop pretending this is final', 'I might as well stop pretending this is final.']
            ],
            shadows: ['I might as WELL | TELL them | NOW', 'I might as WELL | KEEP | the TI-mer', 'I might as WELL | treat this | as a PI-lot'],
            situation: ['初稿已經改不動，乾脆重寫。', 'I might as well start over.'],
            trans: [
                ['改成 There is no point not to', 'There is no point in not starting over.'],
                ['改成 I may as well', 'I may as well start over.']
            ],
            resps: [
                ['The draft is a mess. What now?', 'I might as well start over.'],
                ['Should we hide the limitation?', 'I might as well admit the gap.']
            ],
            exps: [
                ['加上 from the method section', 'I might as well start over from the method section.'],
                ['再加上 tonight', 'I might as well start over from the method section tonight.']
            ]
        })
    ];

    global.FSI_STARTER_SETS = (global.FSI_STARTER_SETS || []).concat(extra);
    global.FSI_LIBRARY_VERSION = 4;
})(typeof window !== 'undefined' ? window : globalThis);
