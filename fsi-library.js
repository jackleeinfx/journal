/* FSI 內建題庫 v3：句型名清楚、不顯示音標亂碼、影子練習出完整句子 */
(function (global) {
    function fsiTriple(s) {
        if (Array.isArray(s)) return [s[0] || '', s[1] || '', s[2] || '', s[3] || ''];
        return [s.p || '', s.r || '', s.c || '', s.zh || s.translation || ''];
    }

    function fsiPackSet(meta, spec) {
        const items = [];
        items.push({
            type: 'echo',
            prompt: meta.baseSentence,
            reference: meta.baseSentence,
            zh: meta.baseZh || meta.zh || '',
            rhythm: meta.rhythm || '',
            cue: '先跟讀完整句子'
        });
        const subs = spec.subs || [];
        let shadowIdx = 0;
        subs.forEach((s, i) => {
            const [p, r, c, zh] = fsiTriple(s);
            items.push({ type: 'substitution', prompt: p, cue: c || ('換成：' + p), reference: r, zh });
            if ((i + 1) % 5 === 0) {
                const sh = (spec.shadows || [])[shadowIdx++] || '';
                items.push({
                    type: 'shadow',
                    prompt: r,
                    reference: r,
                    zh,
                    rhythm: sh,
                    cue: '再跟讀一次，對齊重音'
                });
            }
        });
        if (spec.situation) {
            const [p, r, c, zh] = fsiTriple(spec.situation);
            items.push({ type: 'situation', prompt: p, reference: r, cue: c || '用這個句型回答', zh });
        }
        (spec.trans || []).forEach(s => {
            const [p, r, c, zh] = fsiTriple(s);
            items.push({ type: 'transformation', prompt: p, cue: c || meta.baseSentence, reference: r, zh });
        });
        (spec.resps || []).forEach(s => {
            const [p, r, c, zh] = fsiTriple(s);
            items.push({ type: 'response', prompt: p, cue: c, reference: r, zh });
        });
        (spec.exps || []).forEach(s => {
            const [p, r, c, zh] = fsiTriple(s);
            items.push({ type: 'expansion', prompt: p, cue: c, reference: r, zh });
        });
        (spec.ints || []).forEach(s => {
            const [p, r, c, zh] = fsiTriple(s);
            items.push({ type: 'integration', prompt: p, cue: c || '合成一句', reference: r, zh });
        });
        (spec.comps || []).forEach(s => {
            const [p, r, c, zh] = fsiTriple(s);
            items.push({ type: 'completion', prompt: p, cue: c || '把句子說完', reference: r, zh });
        });
        return { builtin: true, version: 5, ...meta, items };
    }

    const add = (meta, spec) => fsiPackSet(meta, spec);

    const FSI_STARTER_SETS = [
        add({
            id: 'starter-i-want',
            title: '想要：I want + 名詞',
            topic: '點餐、表達需求',
            level: 'A1',
            source: 'spoken',
            corePattern: 'I want + noun',
            baseSentence: 'I want coffee.',
            rhythm: 'I WANT | COF-fee'
        }, {
            subs: [
                ['tea', 'I want tea.'], ['water', 'I want water.'], ['juice', 'I want juice.'],
                ['milk', 'I want milk.'], ['a sandwich', 'I want a sandwich.'],
                ['a salad', 'I want a salad.'], ['some water', 'I want some water.'],
                ['ice cream', 'I want ice cream.'], ['the check', 'I want the check.'],
                ['a table for two', 'I want a table for two.'], ['more time', 'I want more time.'],
                ['a latte', 'I want a latte.'], ['the menu', 'I want the menu.'],
                ['a window seat', 'I want a window seat.'], ['help', 'I want help.'],
                ['the Wi-Fi password', 'I want the Wi-Fi password.'],
                ['another cup', 'I want another cup.'], ['the same thing', 'I want the same thing.'],
                ['no ice', 'I want no ice.'], ['a receipt', 'I want a receipt.']
            ],
            shadows: ['I WANT | a SAND-wich', 'I WANT | a TA-ble | for TWO', 'I WANT | HELP', 'I WANT | a re-CEIPT'],
            situation: ['咖啡店櫃台，店員問 What can I get for you?', 'I want a latte, please.'],
            trans: [
                ['改成否定', "I don't want coffee."],
                ['改成疑問', 'Do you want coffee?'],
                ['改成過去', 'I wanted coffee.'],
                ['改成禮貌 I would like', "I'd like coffee."],
                ['主詞改 she', 'She wants coffee.']
            ],
            resps: [
                ['Waiter: What would you like?', 'I want coffee, please.'],
                ['Friend: Tea or coffee?', 'I want coffee.'],
                ['Cashier: For here or to go?', 'I want it to go.']
            ],
            exps: [
                ['加上 a cup of', 'I want a cup of coffee.'],
                ['再加上 with milk', 'I want a cup of coffee with milk.'],
                ['再加上 please', 'I want a cup of coffee with milk, please.']
            ]
        }),
        add({
            id: 'starter-need-to',
            title: '必須：I need to + 動詞',
            topic: '必要的行動',
            level: 'A2',
            source: 'spoken',
            corePattern: 'I need to + verb',
            baseSentence: 'I need to leave now.',
            rhythm: 'I NEED to | LEAVE | NOW'
        }, {
            subs: [
                ['call her', 'I need to call her.'], ['finish this', 'I need to finish this.'],
                ['go home', 'I need to go home.'], ['ask a question', 'I need to ask a question.'],
                ['take a break', 'I need to take a break.'], ['check the time', 'I need to check the time.'],
                ['send the email', 'I need to send the email.'], ['see a doctor', 'I need to see a doctor.'],
                ['find a seat', 'I need to find a seat.'], ['speak slower', 'I need to speak slower.'],
                ['think about it', 'I need to think about it.'], ['get some sleep', 'I need to get some sleep.'],
                ['pay the bill', 'I need to pay the bill.'], ['make a decision', 'I need to make a decision.'],
                ['talk to you', 'I need to talk to you.']
            ],
            shadows: ['I NEED to | TAKE | a BREAK', 'I NEED to | SEND | the E-mail', 'I NEED to | MAKE | a de-CI-sion'],
            situation: ['會議拖太久，你站起來。', 'I need to leave now.'],
            trans: [
                ['改成否定', "I don't need to leave now."],
                ['改成疑問', 'Do you need to leave now?'],
                ['主詞 she', 'She needs to leave now.'],
                ['改成過去', 'I needed to leave then.']
            ],
            resps: [
                ['Why are you standing up?', 'I need to leave now.'],
                ['You look tired.', 'I need to take a break.']
            ],
            exps: [
                ['加上 right', 'I need to leave right now.'],
                ['再加上 for a meeting', 'I need to leave right now for a meeting.']
            ]
        }),
        add({
            id: 'starter-can-you',
            title: '請求：Can you + 動詞',
            topic: '日常禮貌請求',
            level: 'A2',
            source: 'spoken',
            corePattern: 'Can you + verb?',
            baseSentence: 'Can you help me?',
            rhythm: 'can YOU | HELP me'
        }, {
            subs: [
                ['wait a second', 'Can you wait a second?'], ['say that again', 'Can you say that again?'],
                ['speak slower', 'Can you speak slower?'], ['open the window', 'Can you open the window?'],
                ['close the door', 'Can you close the door?'], ['pass the salt', 'Can you pass the salt?'],
                ['take a photo', 'Can you take a photo?'], ['give me a hand', 'Can you give me a hand?'],
                ['hold this', 'Can you hold this?'], ['repeat that', 'Can you repeat that?'],
                ['call me later', 'Can you call me later?'], ['send me the link', 'Can you send me the link?'],
                ['turn down the music', 'Can you turn down the music?'], ['write it down', 'Can you write it down?'],
                ['show me how', 'Can you show me how?'], ['keep this quiet', 'Can you keep this quiet?'],
                ['check this', 'Can you check this?'], ['come here', 'Can you come here?'],
                ['explain that', 'Can you explain that?'], ['wait outside', 'Can you wait outside?']
            ],
            shadows: ['can YOU | CLOSE | the DOOR', 'can YOU | re-PEAT | THAT', 'can YOU | TURN DOWN | the MU-sic', 'can YOU | ex-PLAIN | THAT'],
            situation: ['會議室太吵，請同事關門。', 'Can you close the door?'],
            trans: [
                ['改成更禮貌 Could you', 'Could you help me?'],
                ['加上 please', 'Can you help me, please?'],
                ['主詞 he', 'Can he help me?']
            ],
            resps: [
                ['You missed the last sentence.', 'Can you say that again?'],
                ['The music is too loud.', 'Can you turn down the music?']
            ],
            exps: [
                ['加上 for a minute', 'Can you help me for a minute?'],
                ['再加上 with this bag', 'Can you help me with this bag for a minute?']
            ]
        }),
        add({
            id: 'starter-could-you',
            title: '更禮貌：Could you + 動詞',
            topic: '正式一點的請求',
            level: 'A2',
            source: 'spoken',
            corePattern: 'Could you + verb?',
            baseSentence: 'Could you send that today?',
            rhythm: 'could YOU | SEND that | to-DAY'
        }, {
            subs: [
                ['call me back', 'Could you call me back?'],
                ['repeat the question', 'Could you repeat the question?'],
                ['speak a little louder', 'Could you speak a little louder?'],
                ['hold the line', 'Could you hold the line?'],
                ['look at this', 'Could you look at this?'],
                ['wait until Friday', 'Could you wait until Friday?'],
                ['confirm the time', 'Could you confirm the time?'],
                ['forward the email', 'Could you forward the email?'],
                ['print a copy', 'Could you print a copy?'],
                ['join us later', 'Could you join us later?'],
                ['keep me posted', 'Could you keep me posted?'],
                ['sign here', 'Could you sign here?'],
                ['move a bit', 'Could you move a bit?'],
                ['close that tab', 'Could you close that tab?'],
                ['try again', 'Could you try again?']
            ],
            shadows: ['could YOU | HOLD | the LINE', 'could YOU | FOR-ward | the E-mail', 'could YOU | KEEP me | POS-ted'],
            situation: ['客戶信裡請對方今天寄檔。', 'Could you send that today?'],
            trans: [
                ['改成 Can you', 'Can you send that today?'],
                ['改成否定請求 Could you not', 'Could you not send that today?']
            ],
            resps: [
                ['I did not hear the question.', 'Could you repeat the question?'],
                ['I am still waiting for the file.', 'Could you send that today?']
            ],
            exps: [
                ['加上 please', 'Could you send that today, please?'],
                ['再加上 by email', 'Could you send that today by email, please?']
            ]
        }),
        add({
            id: 'starter-would-you-mind',
            title: '很禮貌：Would you mind + V-ing',
            topic: '最客氣的請求',
            level: 'B1',
            source: 'spoken',
            corePattern: 'Would you mind + V-ing?',
            baseSentence: 'Would you mind closing the window?',
            rhythm: 'would you MIND | CLO-sing | the WIN-dow'
        }, {
            subs: [
                ['waiting a minute', 'Would you mind waiting a minute?'],
                ['speaking slower', 'Would you mind speaking slower?'],
                ['turning down the music', 'Would you mind turning down the music?'],
                ['helping me with this', 'Would you mind helping me with this?'],
                ['repeating that', 'Would you mind repeating that?'],
                ['holding this', 'Would you mind holding this?'],
                ['sending the file', 'Would you mind sending the file?'],
                ['coming a bit earlier', 'Would you mind coming a bit earlier?'],
                ['keeping this quiet', 'Would you mind keeping this quiet?'],
                ['checking this for me', 'Would you mind checking this for me?'],
                ['moving your bag', 'Would you mind moving your bag?'],
                ['waiting outside', 'Would you mind waiting outside?'],
                ['taking a look', 'Would you mind taking a look?'],
                ['not smoking here', 'Would you mind not smoking here?'],
                ['not interrupting', 'Would you mind not interrupting?']
            ],
            shadows: ['would you MIND | WAI-ting | a MI-nute', 'would you MIND | SEN-ding | the FILE', 'would you MIND | NOT | SMO-king | HERE'],
            situation: ['辦公室很冷，窗還開著。', 'Would you mind closing the window?'],
            trans: [
                ['改成 Can you', 'Can you close the window?'],
                ['改成 Could you', 'Could you close the window?']
            ],
            resps: [
                ['It is cold in here.', 'Would you mind closing the window?'],
                ['Someone is smoking nearby.', 'Would you mind not smoking here?']
            ],
            exps: [
                ['加上 please', 'Would you mind closing the window, please?'],
                ['再加上 a little', 'Would you mind closing the window a little, please?']
            ]
        }),
        add({
            id: 'starter-id-like',
            title: '禮貌意向：I would like to + 動詞',
            topic: '餐廳、櫃台、電話',
            level: 'A2',
            source: 'spoken',
            corePattern: "I'd like to + verb",
            baseSentence: "I'd like to make a reservation.",
            rhythm: "I'd LIKE to | MAKE | a re-ser-VA-tion"
        }, {
            subs: [
                ['order now', "I'd like to order now."],
                ['speak to the manager', "I'd like to speak to the manager."],
                ['book a table', "I'd like to book a table."],
                ['ask a question', "I'd like to ask a question."],
                ['try this on', "I'd like to try this on."],
                ['pay by card', "I'd like to pay by card."],
                ['change my order', "I'd like to change my order."],
                ['leave a message', "I'd like to leave a message."],
                ['get a refund', "I'd like to get a refund."],
                ['check in', "I'd like to check in."],
                ['cancel my booking', "I'd like to cancel my booking."],
                ['see the menu', "I'd like to see the menu."],
                ['add one more', "I'd like to add one more."],
                ['sit by the window', "I'd like to sit by the window."],
                ['confirm the address', "I'd like to confirm the address."]
            ],
            shadows: ["I'd LIKE to | SPEAK | to the MA-na-ger", "I'd LIKE to | PAY | by CARD", "I'd LIKE to | CHECK | IN"],
            situation: ['打電話給餐廳訂位。', "I'd like to make a reservation."],
            trans: [
                ['主詞 We', "We'd like to make a reservation."],
                ['改成疑問', 'Would you like to make a reservation?'],
                ['改成過去', 'I wanted to make a reservation.']
            ],
            resps: [
                ['How can I help you?', "I'd like to make a reservation."],
                ['Cash or card?', "I'd like to pay by card."]
            ],
            exps: [
                ['加上 for two', "I'd like to make a reservation for two."],
                ['再加上 at seven', "I'd like to make a reservation for two at seven."]
            ]
        }),
        add({
            id: 'starter-do-you-want-me',
            title: '主動幫忙：Do you want me to + 動詞',
            topic: '提出代勞',
            level: 'A2',
            source: 'spoken',
            corePattern: 'Do you want me to + verb?',
            baseSentence: 'Do you want me to call her?',
            rhythm: 'do you WANT me to | CALL her'
        }, {
            subs: [
                ['wait here', 'Do you want me to wait here?'],
                ['send the file', 'Do you want me to send the file?'],
                ['come with you', 'Do you want me to come with you?'],
                ['explain it again', 'Do you want me to explain it again?'],
                ['take a photo', 'Do you want me to take a photo?'],
                ['close the window', 'Do you want me to close the window?'],
                ['make a reservation', 'Do you want me to make a reservation?'],
                ['pick you up', 'Do you want me to pick you up?'],
                ['check this', 'Do you want me to check this?'],
                ['talk to him', 'Do you want me to talk to him?'],
                ['turn it off', 'Do you want me to turn it off?'],
                ['write that down', 'Do you want me to write that down?'],
                ['leave now', 'Do you want me to leave now?'],
                ['repeat that', 'Do you want me to repeat that?'],
                ['handle this', 'Do you want me to handle this?']
            ],
            shadows: ['do you WANT me to | SEND | the FILE', 'do you WANT me to | PICK you | UP', 'do you WANT me to | HAN-dle | THIS'],
            situation: ['同事忙到沒時間打電話。', 'Do you want me to call her?'],
            trans: [
                ['改成肯定 I can', 'I can call her.'],
                ['改成 Should I', 'Should I call her?']
            ],
            resps: [
                ['I have no time to call her.', 'Do you want me to call her?'],
                ['This bag is heavy.', 'Do you want me to help you?']
            ],
            exps: [
                ['加上 now', 'Do you want me to call her now?'],
                ['再加上 for you', 'Do you want me to call her now for you?']
            ]
        }),
        add({
            id: 'starter-there-is',
            title: '存在：There is / There are',
            topic: '描述眼前有什麼',
            level: 'A1',
            source: 'spoken',
            corePattern: 'There is/are + noun + place',
            baseSentence: 'There is a book on the table.',
            rhythm: 'there IS | a BOOK | on the TA-ble'
        }, {
            subs: [
                ['a pen', 'There is a pen on the table.'], ['a cup', 'There is a cup on the table.'],
                ['two books', 'There are two books on the table.'],
                ['in the bag', 'There is a book in the bag.'],
                ['near the window', 'There is a book near the window.'],
                ['some water', 'There is some water on the table.'],
                ['three chairs', 'There are three chairs in the room.'],
                ['a laptop', 'There is a laptop on the table.'],
                ['under the chair', 'There is a book under the chair.'],
                ['no book', 'There is no book on the table.'],
                ['a problem', 'There is a problem.'],
                ['too many people', 'There are too many people.'],
                ['a meeting at three', 'There is a meeting at three.'],
                ['nothing here', 'There is nothing here.'],
                ['a better way', 'There is a better way.']
            ],
            shadows: ['there ARE | TWO books | on the TA-ble', 'there IS | a LAP-top | on the TA-ble', 'there IS | a PROB-lem'],
            situation: ['有人問桌上有什麼。', 'There is a book on the table.'],
            trans: [
                ['改成疑問', 'Is there a book on the table?'],
                ['改成否定', 'There is not a book on the table.'],
                ['改成複數', 'There are books on the table.'],
                ['改成過去', 'There was a book on the table.']
            ],
            resps: [
                ['Is there a book on the table?', 'Yes, there is a book on the table.'],
                ['How many chairs are there?', 'There are three chairs.']
            ],
            exps: [
                ['加上 red', 'There is a red book on the table.'],
                ['再加上 next to the lamp', 'There is a red book on the table next to the lamp.']
            ]
        }),
        add({
            id: 'starter-whose',
            title: '所有格：Whose + 名詞 + is this?',
            topic: '問東西是誰的',
            level: 'A1',
            source: 'fsi',
            corePattern: 'Whose + noun + is this/that?',
            baseSentence: 'Whose book is this?',
            rhythm: 'WHOSE book | is THIS'
        }, {
            subs: [
                ['pen', 'Whose pen is this?'], ['bag', 'Whose bag is this?'],
                ['phone', 'Whose phone is this?'], ['coat', 'Whose coat is this?'],
                ['laptop', 'Whose laptop is this?'], ['umbrella', 'Whose umbrella is this?'],
                ['notebook', 'Whose notebook is this?'], ['jacket', 'Whose jacket is this?'],
                ['wallet', 'Whose wallet is this?'], ['chair', 'Whose chair is this?'],
                ['key', 'Whose key is this?'], ['cup', 'Whose cup is this?'],
                ['scarf', 'Whose scarf is this?'], ['ticket', 'Whose ticket is this?'],
                ['hat', 'Whose hat is this?']
            ],
            shadows: ['WHOSE bag | is THIS', 'WHOSE LAP-top | is THIS', 'WHOSE WAL-let | is THIS'],
            situation: ['桌上有一支不是你的筆。', 'Whose pen is this?'],
            trans: [
                ['改成 that', 'Whose book is that?'],
                ['改成複數 these', 'Whose books are these?'],
                ['改成陳述', 'This is my book.']
            ],
            resps: [
                ['Whose book is this?（你的）', "It's mine."],
                ["Whose pen is that?（Jim 的）", "It's Jim's."],
                ['Whose bag is this?（她的）', "It's hers."]
            ],
            exps: [
                ['加上 on the table', 'Whose book is this on the table?'],
                ['再加上 blue', 'Whose blue book is this on the table?']
            ]
        }),
        add({
            id: 'starter-where-is',
            title: '位置：He is at / in + 地點',
            topic: '回答人在哪裡',
            level: 'A1',
            source: 'fsi',
            corePattern: 'He/She/It is at/in + place',
            baseSentence: 'He is at home.',
            rhythm: 'he is | at HOME'
        }, {
            subs: [
                ['at work', 'He is at work.'], ['at school', 'He is at school.'],
                ['in a meeting', 'He is in a meeting.'], ['at the airport', 'He is at the airport.'],
                ['on the bus', 'He is on the bus.'], ['in the kitchen', 'He is in the kitchen.'],
                ['at the gym', 'He is at the gym.'], ['out of town', 'He is out of town.'],
                ['in the office', 'He is in the office.'], ['at the hospital', 'He is at the hospital.'],
                ['on his way', 'He is on his way.'], ['next door', 'He is next door.'],
                ['upstairs', 'He is upstairs.'], ['outside', 'He is outside.'],
                ['in Toronto', 'He is in Toronto.']
            ],
            shadows: ['he is | in a MEE-ting', 'he is | at the AIR-port', 'he is | on his WAY'],
            situation: ['電話問：Is John there?', 'No, he is at work.'],
            trans: [
                ['改成疑問', 'Is he at home?'],
                ['改成否定', 'He is not at home.'],
                ['主詞 they', 'They are at home.'],
                ['主詞 she', 'She is at home.']
            ],
            resps: [
                ['Where is John?', 'He is at home.'],
                ['Where is your brother?', 'He is at work.'],
                ['Where is the manager?', 'She is in a meeting.'],
                ['Where is the file?', 'It is on the desk.']
            ],
            exps: [
                ['加上 right now', 'He is at home right now.'],
                ['再加上 with his kids', 'He is at home with his kids right now.']
            ]
        }),
        add({
            id: 'starter-she-drinks',
            title: '習慣：主詞 + 動詞 + 時間',
            topic: 'FSI 多槽替換（主詞／受詞／時間）',
            level: 'A2',
            source: 'fsi',
            corePattern: 'Subject + drink(s) + noun + time',
            baseSentence: 'She drinks coffee in the morning.',
            rhythm: 'she DRINKS | COF-fee | in the MOR-ning'
        }, {
            subs: [
                ['tea', 'She drinks tea in the morning.'],
                ['water', 'She drinks water in the morning.'],
                ['juice', 'She drinks juice in the morning.'],
                ['at lunch', 'She drinks coffee at lunch.'],
                ['at night', 'She drinks coffee at night.'],
                ['he', 'He drinks coffee in the morning.'],
                ['we', 'We drink coffee in the morning.'],
                ['they', 'They drink coffee in the morning.'],
                ['I', 'I drink coffee in the morning.'],
                ['after work', 'She drinks coffee after work.'],
                ['every day', 'She drinks coffee every day.'],
                ['my brother', 'My brother drinks coffee in the morning.'],
                ['on weekends', 'She drinks coffee on weekends.'],
                ['black tea', 'She drinks black tea in the morning.'],
                ['before class', 'She drinks coffee before class.']
            ],
            shadows: ['she DRINKS | COF-fee | at NIGHT', 'we DRINK | COF-fee | in the MOR-ning', 'she DRINKS | COF-fee | EV-ery DAY'],
            situation: ['同事問她早上喝什麼。', 'She drinks coffee in the morning.'],
            trans: [
                ['改成否定', 'She does not drink coffee in the morning.'],
                ['改成疑問', 'Does she drink coffee in the morning?'],
                ['改成過去', 'She drank coffee in the morning.'],
                ['主詞 we + 否定', 'We do not drink coffee in the morning.']
            ],
            resps: [
                ['What does she drink in the morning?', 'She drinks coffee in the morning.'],
                ['When does she drink coffee?', 'She drinks coffee in the morning.']
            ],
            exps: [
                ['加上 hot', 'She drinks hot coffee in the morning.'],
                ['再加上 at home', 'She drinks hot coffee at home in the morning.']
            ]
        }),
        add({
            id: 'starter-be-reading',
            title: '進行式：is / are + V-ing',
            topic: 'FSI 轉換：正在做的事',
            level: 'B1',
            source: 'fsi',
            corePattern: 'be + V-ing',
            baseSentence: 'She is reading the report.',
            rhythm: 'she is READ-ing | the re-PORT'
        }, {
            subs: [
                ['writing', 'She is writing the report.'],
                ['checking', 'She is checking the report.'],
                ['the email', 'She is reading the email.'],
                ['he', 'He is reading the report.'],
                ['they', 'They are reading the report.'],
                ['we', 'We are reading the report.'],
                ['the contract', 'She is reading the contract.'],
                ['I', 'I am reading the report.'],
                ['the news', 'She is reading the news.'],
                ['a message', 'She is reading a message.']
            ],
            shadows: ['they are READ-ing | the re-PORT', 'I am READ-ing | the re-PORT'],
            situation: ['老闆問她在做什麼。', 'She is reading the report.'],
            trans: [
                ['改成否定', 'She is not reading the report.'],
                ['改成疑問', 'Is she reading the report?'],
                ['改成過去進行', 'She was reading the report.'],
                ['改成未來進行', 'She will be reading the report.'],
                ['改成被動進行', 'The report is being read.'],
                ['改成現在完成進行', 'She has been reading the report.']
            ],
            resps: [
                ['What is she doing?', 'She is reading the report.'],
                ['Is he writing the report?', 'No, he is reading the report.']
            ],
            exps: [
                ['加上 carefully', 'She is reading the report carefully.'],
                ['再加上 in the meeting', 'She is reading the report carefully in the meeting.']
            ]
        }),
        add({
            id: 'starter-going-to',
            title: '計畫：be going to + 動詞',
            topic: '已決定的未來',
            level: 'A1',
            source: 'spoken',
            corePattern: 'be going to + verb',
            baseSentence: "I'm going to call her.",
            rhythm: "I'm GO-ing to | CALL her"
        }, {
            subs: [
                ['email him', "I'm going to email him."],
                ['stay home', "I'm going to stay home."],
                ['cook dinner', "I'm going to cook dinner."],
                ['take a break', "I'm going to take a break."],
                ['ask for help', "I'm going to ask for help."],
                ['book a flight', "I'm going to book a flight."],
                ['see a doctor', "I'm going to see a doctor."],
                ['tell the truth', "I'm going to tell the truth."],
                ['start over', "I'm going to start over."],
                ['wait outside', "I'm going to wait outside."],
                ['she / call him', 'She is going to call him.'],
                ['they / leave soon', 'They are going to leave soon.'],
                ['we / move', 'We are going to move.'],
                ['he / be late', 'He is going to be late.'],
                ['it / rain', 'It is going to rain.']
            ],
            shadows: ["I'm GO-ing to | STAY | HOME", 'they are GO-ing to | LEAVE | SOON', 'it is GO-ing to | RAIN'],
            situation: ['會議結束，說下一步。', "I'm going to call her."],
            trans: [
                ['改成否定', "I'm not going to call her."],
                ['改成疑問', 'Are you going to call her?'],
                ['改成過去打算', 'I was going to call her.']
            ],
            resps: [
                ['What are you going to do next?', "I'm going to call her."],
                ['Is she going to stay home?', 'Yes, she is going to stay home.']
            ],
            exps: [
                ['加上 tonight', "I'm going to call her tonight."],
                ['再加上 after dinner', "I'm going to call her tonight after dinner."]
            ]
        }),
        add({
            id: 'starter-will',
            title: '承諾：I will + 動詞',
            topic: '當場決定或答應',
            level: 'A2',
            source: 'spoken',
            corePattern: 'I will + verb',
            baseSentence: 'I will call you later.',
            rhythm: 'I will CALL you | LA-ter'
        }, {
            subs: [
                ['send it now', 'I will send it now.'],
                ['wait here', 'I will wait here.'],
                ['take care of it', 'I will take care of it.'],
                ['let you know', 'I will let you know.'],
                ['be there at six', 'I will be there at six.'],
                ['check again', 'I will check again.'],
                ['do it myself', 'I will do it myself.'],
                ['get back to you', 'I will get back to you.'],
                ['bring it tomorrow', 'I will bring it tomorrow.'],
                ['handle this', 'I will handle this.'],
                ['ask him', 'I will ask him.'],
                ['try again', 'I will try again.'],
                ['keep you posted', 'I will keep you posted.'],
                ['see what I can do', 'I will see what I can do.'],
                ['make sure', 'I will make sure.']
            ],
            shadows: ['I will TAKE | CARE of it', 'I will GET | BACK to you', 'I will KEEP you | POS-ted'],
            situation: ['對方擔心你忘了回覆。', 'I will call you later.'],
            trans: [
                ['改成否定', 'I will not call you later.'],
                ['改成縮寫 I will not', "I won't call you later."],
                ['改成疑問', 'Will you call me later?']
            ],
            resps: [
                ['When will I hear from you?', 'I will call you later.'],
                ['Who will send the file?', 'I will send it now.']
            ],
            exps: [
                ['加上 tonight', 'I will call you later tonight.'],
                ['再加上 as soon as I can', 'I will call you later tonight as soon as I can.']
            ]
        }),
        add({
            id: 'starter-have-pp',
            title: '完成：I have already + 過去分詞',
            topic: 'already / yet / just',
            level: 'A2',
            source: 'spoken',
            corePattern: 'have/has + already/just + past participle',
            baseSentence: 'I have already finished.',
            rhythm: 'I have AL-rea-dy | FIN-ished'
        }, {
            subs: [
                ['eaten', 'I have already eaten.'],
                ['left', 'I have already left.'],
                ['called her', 'I have already called her.'],
                ['sent the email', 'I have already sent the email.'],
                ['seen that movie', 'I have already seen that movie.'],
                ['paid', 'I have already paid.'],
                ['done my homework', 'I have already done my homework.'],
                ['told him', 'I have already told him.'],
                ['read it', 'I have already read it.'],
                ['booked the ticket', 'I have already booked the ticket.'],
                ['just finished', 'I have just finished.'],
                ['just arrived', 'I have just arrived.'],
                ['she / already left', 'She has already left.'],
                ['they / just started', 'They have just started.'],
                ['we / already decided', 'We have already decided.']
            ],
            shadows: ['I have JUST | FIN-ished', 'she has AL-rea-dy | LEFT', 'I have AL-rea-dy | SENT | the E-mail'],
            situation: ['室友問你要不要吃飯。', 'I have already eaten.'],
            trans: [
                ['改成否定 + yet', 'I have not finished yet.'],
                ['改成疑問', 'Have you already finished?'],
                ['改成過去簡單', 'I finished.'],
                ['主詞 he', 'He has already finished.']
            ],
            resps: [
                ['Have you eaten?', 'Yes, I have already eaten.'],
                ['Has she called him yet?', 'No, she has not called him yet.']
            ],
            exps: [
                ['加上 the report', 'I have already finished the report.'],
                ['再加上 this morning', 'I have already finished the report this morning.']
            ]
        }),
        add({
            id: 'starter-for-since',
            title: '持續：have + 過去分詞 + for / since',
            topic: '從何時開始到現在',
            level: 'B1',
            source: 'spoken',
            corePattern: 'have + V3 + for/since + time',
            baseSentence: 'I have lived here for three years.',
            rhythm: 'I have LIVED here | for THREE | YEARS'
        }, {
            subs: [
                ['two years', 'I have lived here for two years.'],
                ['a long time', 'I have lived here for a long time.'],
                ['since 2020', 'I have lived here since 2020.'],
                ['since last May', 'I have lived here since last May.'],
                ['worked here', 'I have worked here for three years.'],
                ['known her', 'I have known her for three years.'],
                ['studied English', 'I have studied English for three years.'],
                ['had this phone', 'I have had this phone for three years.'],
                ['she / lived here', 'She has lived here for three years.'],
                ['we / been friends', 'We have been friends for three years.'],
                ['since I was a child', 'I have lived here since I was a child.'],
                ['for months', 'I have lived here for months.'],
                ['since Monday', 'I have lived here since Monday.'],
                ['all my life', 'I have lived here all my life.'],
                ['they / known each other', 'They have known each other for three years.']
            ],
            shadows: ['I have WORKED here | for THREE | YEARS', 'I have LIVED here | since TWEN-ty TWEN-ty', 'we have BEEN | FRIENDS | for THREE | YEARS'],
            situation: ['有人問你在這裡多久了。', 'I have lived here for three years.'],
            trans: [
                ['for 改成 since 2022', 'I have lived here since 2022.'],
                ['改成疑問 How long', 'How long have you lived here?'],
                ['改成否定', 'I have not lived here for three years.']
            ],
            resps: [
                ['How long have you lived here?', 'I have lived here for three years.'],
                ['How long have you known her?', 'I have known her for three years.']
            ],
            exps: [
                ['加上 in this city', 'I have lived here in this city for three years.'],
                ['再加上 with my family', 'I have lived here in this city with my family for three years.']
            ]
        }),
        add({
            id: 'starter-used-to',
            title: '過去習慣：used to + 動詞原形',
            topic: '以前常做、現在不做',
            level: 'A2',
            source: 'spoken',
            corePattern: 'used to + verb',
            baseSentence: 'I used to live in Toronto.',
            rhythm: 'I USED to | LIVE | in to-RON-to'
        }, {
            subs: [
                ['work nights', 'I used to work nights.'],
                ['play the piano', 'I used to play the piano.'],
                ['eat meat', 'I used to eat meat.'],
                ['smoke', 'I used to smoke.'],
                ['have more time', 'I used to have more time.'],
                ['take the bus', 'I used to take the bus.'],
                ['get up early', 'I used to get up early.'],
                ['love this song', 'I used to love this song.'],
                ['walk to school', 'I used to walk to school.'],
                ['be afraid of dogs', 'I used to be afraid of dogs.'],
                ['she / live here', 'She used to live here.'],
                ['we / go every week', 'We used to go every week.'],
                ['they / work together', 'They used to work together.'],
                ['he / play soccer', 'He used to play soccer.'],
                ['I / stay up late', 'I used to stay up late.']
            ],
            shadows: ['I USED to | WORK | NIGHTS', 'we USED to | WALK | to SCHOOL', 'I USED to | be a-FRAID | of DOGS'],
            situation: ['朋友聽說你搬過家。', 'I used to live in Toronto.'],
            trans: [
                ['改成否定', "I didn't use to live in Toronto."],
                ['改成疑問', 'Did you use to live in Toronto?'],
                ['改成現在', 'I live in Toronto.']
            ],
            resps: [
                ['Did you live in Toronto before?', 'Yes, I used to live in Toronto.'],
                ['Do you still play the piano?', 'No, but I used to play the piano.']
            ],
            exps: [
                ['加上 when I was a student', 'I used to live in Toronto when I was a student.'],
                ['再加上 near the lake', 'I used to live in Toronto near the lake when I was a student.']
            ]
        }),
        add({
            id: 'starter-be-used-to',
            title: '習慣於：be used to + V-ing',
            topic: '和 used to 不同：現在已習慣',
            level: 'B1',
            source: 'spoken',
            corePattern: 'be used to + V-ing / noun',
            baseSentence: 'I am used to getting up early.',
            rhythm: "I'm USED to | GET-ting | UP EAR-ly"
        }, {
            subs: [
                ['working nights', 'I am used to working nights.'],
                ['living alone', 'I am used to living alone.'],
                ['the cold', 'I am used to the cold.'],
                ['waiting', 'I am used to waiting.'],
                ['speaking English', 'I am used to speaking English.'],
                ['this schedule', 'I am used to this schedule.'],
                ['driving here', 'I am used to driving here.'],
                ['the noise', 'I am used to the noise.'],
                ['she / living here', 'She is used to living here.'],
                ['we / walking', 'We are used to walking.'],
                ['eating late', 'I am used to eating late.'],
                ['being alone', 'I am used to being alone.'],
                ['long meetings', 'I am used to long meetings.'],
                ['his accent', 'I am used to his accent.'],
                ['the time difference', 'I am used to the time difference.']
            ],
            shadows: ["I'm USED to | WORK-ing | NIGHTS", "I'm USED to | the COLD", "I'm USED to | SPEAK-ing | ENG-lish"],
            situation: ['有人覺得你六點起床很辛苦。', 'I am used to getting up early.'],
            trans: [
                ['改成否定', 'I am not used to getting up early.'],
                ['改成疑問', 'Are you used to getting up early?'],
                ['改成過去', 'I was used to getting up early.']
            ],
            resps: [
                ['Is 6 a.m. hard for you?', 'No, I am used to getting up early.'],
                ['Do you mind the cold?', 'No, I am used to the cold.']
            ],
            exps: [
                ['加上 now', 'I am used to getting up early now.'],
                ['再加上 after this job', 'I am used to getting up early now after this job.']
            ]
        }),
        add({
            id: 'starter-should',
            title: '建議：You should + 動詞',
            topic: '給建議',
            level: 'A2',
            source: 'spoken',
            corePattern: 'should + verb',
            baseSentence: 'You should take a break.',
            rhythm: 'you SHOULD | TAKE | a BREAK'
        }, {
            subs: [
                ['see a doctor', 'You should see a doctor.'],
                ['ask for help', 'You should ask for help.'],
                ['try again', 'You should try again.'],
                ['go home', 'You should go home.'],
                ['tell the truth', 'You should tell the truth.'],
                ['wait a bit', 'You should wait a bit.'],
                ['check the date', 'You should check the date.'],
                ['write it down', 'You should write it down.'],
                ['slow down', 'You should slow down.'],
                ['call her', 'You should call her.'],
                ['get more sleep', 'You should get more sleep.'],
                ['think it over', 'You should think it over.'],
                ['I / leave', 'I should leave.'],
                ['we / start', 'We should start.'],
                ['he / apologize', 'He should apologize.']
            ],
            shadows: ['you SHOULD | SEE | a DOC-tor', 'you SHOULD | GET | more SLEEP', 'we SHOULD | START'],
            situation: ['朋友連續工作五小時。', 'You should take a break.'],
            trans: [
                ['改成否定', 'You should not take a break.'],
                ['改成疑問', 'Should I take a break?'],
                ['改成過去該做而未做', 'You should have taken a break.']
            ],
            resps: [
                ['I have a bad headache.', 'You should see a doctor.'],
                ['I have been working for five hours.', 'You should take a break.']
            ],
            exps: [
                ['加上 now', 'You should take a break now.'],
                ['再加上 before you continue', 'You should take a break now before you continue.']
            ]
        }),
        add({
            id: 'starter-have-to',
            title: '義務：I have to + 動詞',
            topic: '不得不做',
            level: 'A2',
            source: 'spoken',
            corePattern: 'have to + verb',
            baseSentence: 'I have to finish this today.',
            rhythm: 'I HAVE to | FIN-ish this | to-DAY'
        }, {
            subs: [
                ['leave now', 'I have to leave now.'],
                ['work late', 'I have to work late.'],
                ['call my parents', 'I have to call my parents.'],
                ['pay the bill', 'I have to pay the bill.'],
                ['get up early', 'I have to get up early.'],
                ['wear a jacket', 'I have to wear a jacket.'],
                ['wait here', 'I have to wait here.'],
                ['tell him', 'I have to tell him.'],
                ['be careful', 'I have to be careful.'],
                ['go to a meeting', 'I have to go to a meeting.'],
                ['she / leave', 'She has to leave.'],
                ['we / wait', 'We have to wait.'],
                ['they / move', 'They have to move.'],
                ['he / study', 'He has to study.'],
                ['you / sign this', 'You have to sign this.']
            ],
            shadows: ['I HAVE to | LEAVE | NOW', 'she HAS to | LEAVE', 'I HAVE to | WORK | LATE'],
            situation: ['朋友約你吃飯，你還有報告。', 'I have to finish this today.'],
            trans: [
                ['改成否定（不必）', "I don't have to finish this today."],
                ['改成疑問', 'Do you have to finish this today?'],
                ['改成過去', 'I had to finish this today.']
            ],
            resps: [
                ['Can you stay longer?', 'No, I have to leave now.'],
                ['Why so early?', 'I have to get up early.']
            ],
            exps: [
                ['加上 by five', 'I have to finish this today by five.'],
                ['再加上 or I will miss the deadline', 'I have to finish this today by five or I will miss the deadline.']
            ]
        }),
        add({
            id: 'starter-lets',
            title: '提議：Let us + 動詞',
            topic: '一起做',
            level: 'A1',
            source: 'spoken',
            corePattern: "Let's + verb",
            baseSentence: "Let's take a break.",
            rhythm: "let's TAKE | a BREAK"
        }, {
            subs: [
                ['go home', "Let's go home."],
                ['start now', "Let's start now."],
                ['wait here', "Let's wait here."],
                ['try again', "Let's try again."],
                ['eat first', "Let's eat first."],
                ['call her', "Let's call her."],
                ['sit down', "Let's sit down."],
                ['keep going', "Let's keep going."],
                ['talk later', "Let's talk later."],
                ['check the map', "Let's check the map."],
                ['split the bill', "Let's split the bill."],
                ['move on', "Let's move on."],
                ['get some air', "Let's get some air."],
                ['ask someone', "Let's ask someone."],
                ['leave it for tomorrow', "Let's leave it for tomorrow."]
            ],
            shadows: ["let's GO | HOME", "let's TRY | a-GAIN", "let's TALK | LA-ter"],
            situation: ['小組討論卡住了。', "Let's take a break."],
            trans: [
                ['改成 Why do we not', "Why don't we take a break?"],
                ['改成否定 Let us not', "Let's not take a break."]
            ],
            resps: [
                ['I am stuck on this problem.', "Let's take a break."],
                ['It is getting late.', "Let's go home."]
            ],
            exps: [
                ['加上 for ten minutes', "Let's take a break for ten minutes."],
                ['再加上 and then continue', "Let's take a break for ten minutes and then continue."]
            ]
        }),
        add({
            id: 'starter-why-dont-we',
            title: '提議：Why do we not + 動詞',
            topic: '比 Let us 更像商量',
            level: 'A2',
            source: 'spoken',
            corePattern: "Why don't we + verb?",
            baseSentence: "Why don't we meet at six?",
            rhythm: "why DON'T we | MEET | at SIX"
        }, {
            subs: [
                ['start tomorrow', "Why don't we start tomorrow?"],
                ['eat here', "Why don't we eat here?"],
                ['ask him first', "Why don't we ask him first?"],
                ['take a taxi', "Why don't we take a taxi?"],
                ['wait a bit', "Why don't we wait a bit?"],
                ['try this one', "Why don't we try this one?"],
                ['split the work', "Why don't we split the work?"],
                ['go together', "Why don't we go together?"],
                ['leave early', "Why don't we leave early?"],
                ['talk after lunch', "Why don't we talk after lunch?"],
                ['use this file', "Why don't we use this file?"],
                ['sit outside', "Why don't we sit outside?"],
                ['call them now', "Why don't we call them now?"],
                ['keep it simple', "Why don't we keep it simple?"],
                ['meet online', "Why don't we meet online?"]
            ],
            shadows: ["why DON'T we | ASK him | FIRST", "why DON'T we | TAKE | a TAX-i", "why DON'T we | KEEP it | SIM-ple"],
            situation: ['約時間，對方說晚上都可以。', "Why don't we meet at six?"],
            trans: [
                ['改成 Let us', "Let's meet at six."],
                ['改成 How about', 'How about meeting at six?']
            ],
            resps: [
                ['When should we meet?', "Why don't we meet at six?"],
                ['This plan is too complex.', "Why don't we keep it simple?"]
            ],
            exps: [
                ['加上 at the station', "Why don't we meet at six at the station?"],
                ['再加上 if that works for you', "Why don't we meet at six at the station if that works for you?"]
            ]
        }),
        add({
            id: 'starter-comparatives',
            title: '比較級：A is + -er / more + than B',
            topic: '兩者比較',
            level: 'A2',
            source: 'fsi',
            corePattern: 'X is comparative than Y',
            baseSentence: 'This one is cheaper than that one.',
            rhythm: 'this ONE | is CHEAP-er | than THAT one'
        }, {
            subs: [
                ['better', 'This one is better than that one.'],
                ['worse', 'This one is worse than that one.'],
                ['faster', 'This one is faster than that one.'],
                ['easier', 'This one is easier than that one.'],
                ['closer', 'This one is closer than that one.'],
                ['more expensive', 'This one is more expensive than that one.'],
                ['more useful', 'This one is more useful than that one.'],
                ['more comfortable', 'This one is more comfortable than that one.'],
                ['larger', 'This one is larger than that one.'],
                ['safer', 'This one is safer than that one.'],
                ['the new plan / better', 'The new plan is better than that one.'],
                ['today / colder', 'Today is colder than that one.'],
                ['this room / quieter', 'This room is quieter than that one.'],
                ['her idea / clearer', 'Her idea is clearer than that one.'],
                ['this route / shorter', 'This route is shorter than that one.']
            ],
            shadows: ['this ONE | is BET-ter | than THAT one', 'this ONE | is more ex-PEN-sive | than THAT one', 'this ROOM | is QUI-et-er | than THAT one'],
            situation: ['店員問你要哪一個。', 'This one is cheaper than that one.'],
            trans: [
                ['改成最高級', 'This one is the cheapest.'],
                ['改成否定', 'This one is not cheaper than that one.'],
                ['改成疑問', 'Is this one cheaper than that one?']
            ],
            resps: [
                ['Which one should I buy?', 'This one is cheaper than that one.'],
                ['Is the new plan better?', 'Yes, the new plan is better than that one.']
            ],
            exps: [
                ['加上 and faster', 'This one is cheaper and faster than that one.'],
                ['再加上 in the long run', 'This one is cheaper and faster than that one in the long run.']
            ]
        }),
        add({
            id: 'starter-if-real',
            title: '真實條件：If I + 現在，I will',
            topic: '第一類條件句',
            level: 'B1',
            source: 'fsi',
            corePattern: 'If + present, will + verb',
            baseSentence: 'If I have time, I will call you.',
            rhythm: 'if I HAVE time | I will CALL you'
        }, {
            subs: [
                ['see her', 'If I have time, I will see her.'],
                ['come later', 'If I have time, I will come later.'],
                ['help you', 'If I have time, I will help you.'],
                ['If it rains', 'If it rains, I will call you.'],
                ['If she asks', 'If she asks, I will call you.'],
                ['If we leave now', 'If we leave now, I will call you.'],
                ['send the file', 'If I have time, I will send the file.'],
                ['join you', 'If I have time, I will join you.'],
                ['If I finish early', 'If I finish early, I will call you.'],
                ['If they agree', 'If they agree, I will call you.'],
                ['stay home', 'If I have time, I will stay home.'],
                ['If I am free', 'If I am free, I will call you.'],
                ['If you need me', 'If you need me, I will call you.'],
                ['write it tonight', 'If I have time, I will write it tonight.'],
                ['If the train is late', 'If the train is late, I will call you.']
            ],
            shadows: ['if I HAVE time | I will HELP you', 'if it RAINS | I will CALL you', 'if I FIN-ish EAR-ly | I will CALL you'],
            situation: ['朋友問今晚能不能打電話。', 'If I have time, I will call you.'],
            trans: [
                ['改成否定', 'If I have time, I will not call you.'],
                ['改成疑問', 'If you have time, will you call me?'],
                ['主句改成 can', 'If I have time, I can call you.']
            ],
            resps: [
                ['Will you call me tonight?', 'If I have time, I will call you.'],
                ['What if it rains?', 'If it rains, I will call you.']
            ],
            exps: [
                ['加上 tonight', 'If I have time, I will call you tonight.'],
                ['再加上 after dinner', 'If I have time, I will call you tonight after dinner.']
            ]
        }),
        add({
            id: 'starter-if-clause',
            title: '虛擬現在：If I had，I would',
            topic: '第二類條件句',
            level: 'B1',
            source: 'fsi',
            corePattern: 'If I had + noun, I would + verb',
            baseSentence: 'If I had more time, I would learn French.',
            rhythm: 'if I HAD | more TIME | I would LEARN | FRENCH'
        }, {
            subs: [
                ['Spanish', 'If I had more time, I would learn Spanish.'],
                ['the piano', 'If I had more time, I would learn the piano.'],
                ['more money', 'If I had more money, I would learn French.'],
                ['travel more', 'If I had more time, I would travel more.'],
                ['sleep longer', 'If I had more time, I would sleep longer.'],
                ['she / more time', 'If she had more time, she would learn French.'],
                ['we / more money', 'If we had more money, we would learn French.'],
                ['a car', 'If I had a car, I would learn French.'],
                ['work less', 'If I had more time, I would work less.'],
                ['read more', 'If I had more time, I would read more.'],
                ['start a company', 'If I had more time, I would start a company.'],
                ['move there', 'If I had more time, I would move there.'],
                ['help you', 'If I had more time, I would help you.'],
                ['take the job', 'If I had more time, I would take the job.'],
                ['stay longer', 'If I had more time, I would stay longer.']
            ],
            shadows: ['if I HAD | more TIME | I would TRA-vel | MORE', 'if she HAD | more TIME | she would LEARN | FRENCH', 'if I HAD | more TIME | I would HELP you'],
            situation: ['朋友問：If you had a free year?', 'If I had more time, I would learn French.'],
            trans: [
                ['改成真實條件 If I have', 'If I have more time, I will learn French.'],
                ['改成否定', 'If I had more time, I would not learn French.'],
                ['改成疑問', 'If you had more time, would you learn French?']
            ],
            resps: [
                ['What would you do if you had more time?', 'If I had more time, I would learn French.'],
                ['What would she do if she had more money?', 'If she had more money, she would travel more.']
            ],
            comps: [
                ['If I had more time, ___', 'If I had more time, I would learn French.'],
                ['If I were you, ___', 'If I were you, I would take the job.'],
                ['If it rained tomorrow, ___', 'If it rained tomorrow, I would stay home.']
            ]
        }),
        add({
            id: 'starter-if-past',
            title: '虛擬過去：If I had + 過去分詞，I would have',
            topic: '第三類條件句：後悔、假設當時',
            level: 'B2',
            source: 'fsi',
            corePattern: 'If I had + V3, I would have + V3',
            baseSentence: 'If I had known, I would have told you.',
            rhythm: 'if I had KNOWN | I would have TOLD you'
        }, {
            subs: [
                ['left earlier', 'If I had left earlier, I would have told you.'],
                ['seen the email', 'If I had seen the email, I would have told you.'],
                ['had more time', 'If I had had more time, I would have told you.'],
                ['I would have come', 'If I had known, I would have come.'],
                ['I would have helped', 'If I had known, I would have helped.'],
                ['I would have stayed', 'If I had known, I would have stayed.'],
                ['If she had asked', 'If she had asked, I would have told you.'],
                ['If we had waited', 'If we had waited, I would have told you.'],
                ['If they had called', 'If they had called, I would have told you.'],
                ['I would have said no', 'If I had known, I would have said no.'],
                ['If I had studied', 'If I had studied, I would have told you.'],
                ['I would have been there', 'If I had known, I would have been there.'],
                ['If it had rained', 'If it had rained, I would have told you.'],
                ['I would have changed it', 'If I had known, I would have changed it.'],
                ['If he had warned me', 'If he had warned me, I would have told you.']
            ],
            shadows: ['if I had KNOWN | I would have COME', 'if she had ASKED | I would have TOLD you', 'if I had KNOWN | I would have HELPED'],
            situation: ['朋友說昨天其實有空位。', 'If I had known, I would have told you.'],
            trans: [
                ['改成否定', 'If I had known, I would not have told you.'],
                ['改成疑問', 'If you had known, would you have told me?']
            ],
            resps: [
                ['Why did you not tell me?', 'If I had known, I would have told you.'],
                ['Why did you not come?', 'If I had known, I would have come.']
            ],
            comps: [
                ['If I had known, ___', 'If I had known, I would have told you.'],
                ['If we had left earlier, ___', 'If we had left earlier, we would have caught the train.']
            ]
        }),
        add({
            id: 'starter-i-wish',
            title: '願望：I wish + 過去式',
            topic: '與現在相反的願望',
            level: 'B2',
            source: 'spoken',
            corePattern: 'I wish + past',
            baseSentence: 'I wish I had more time.',
            rhythm: 'I WISH | I HAD | more TIME'
        }, {
            subs: [
                ['I knew the answer', 'I wish I knew the answer.'],
                ['I could stay', 'I wish I could stay.'],
                ['I spoke better English', 'I wish I spoke better English.'],
                ['it were cheaper', 'I wish it were cheaper.'],
                ['she were here', 'I wish she were here.'],
                ['I did not have to go', 'I wish I did not have to go.'],
                ['we lived closer', 'I wish we lived closer.'],
                ['I remembered his name', 'I wish I remembered his name.'],
                ['it were not raining', 'I wish it were not raining.'],
                ['I could drive', 'I wish I could drive.'],
                ['I had a car', 'I wish I had a car.'],
                ['they understood', 'I wish they understood.'],
                ['I were taller', 'I wish I were taller.'],
                ['this were easier', 'I wish this were easier.'],
                ['I could start over', 'I wish I could start over.']
            ],
            shadows: ['I WISH | I KNEW | the AN-swer', 'I WISH | I could STAY', 'I WISH | she were HERE'],
            situation: ['工作做不完。', 'I wish I had more time.'],
            trans: [
                ['改成 I wish I had + 過去分詞（後悔）', 'I wish I had had more time.'],
                ['改成 If only', 'If only I had more time.']
            ],
            resps: [
                ['You look busy.', 'I wish I had more time.'],
                ['Do you like this price?', 'I wish it were cheaper.']
            ],
            exps: [
                ['加上 every day', 'I wish I had more time every day.'],
                ['再加上 for this project', 'I wish I had more time every day for this project.']
            ]
        }),
        add({
            id: 'starter-if-i-were-you',
            title: '勸告：If I were you, I would',
            topic: '站在對方立場給建議',
            level: 'B1',
            source: 'spoken',
            corePattern: 'If I were you, I would + verb',
            baseSentence: 'If I were you, I would take the job.',
            rhythm: 'if I WERE you | I would TAKE | the JOB'
        }, {
            subs: [
                ['wait', 'If I were you, I would wait.'],
                ['tell her', 'If I were you, I would tell her.'],
                ['say no', 'If I were you, I would say no.'],
                ['ask for more time', 'If I were you, I would ask for more time.'],
                ['go home', 'If I were you, I would go home.'],
                ['not worry', 'If I were you, I would not worry.'],
                ['try again', 'If I were you, I would try again.'],
                ['keep the receipt', 'If I were you, I would keep the receipt.'],
                ['call him tonight', 'If I were you, I would call him tonight.'],
                ['choose the cheaper one', 'If I were you, I would choose the cheaper one.'],
                ['talk to your manager', 'If I were you, I would talk to your manager.'],
                ['sleep on it', 'If I were you, I would sleep on it.'],
                ['not sign yet', 'If I were you, I would not sign yet.'],
                ['get a second opinion', 'If I were you, I would get a second opinion.'],
                ['start today', 'If I were you, I would start today.']
            ],
            shadows: ['if I WERE you | I would WAIT', 'if I WERE you | I would NOT | WOR-ry', 'if I WERE you | I would SLEEP | on it'],
            situation: ['朋友拿到兩份工作 offer。', 'If I were you, I would take the job.'],
            trans: [
                ['改成 I think you should', 'I think you should take the job.'],
                ['改成否定', 'If I were you, I would not take the job.']
            ],
            resps: [
                ['Should I accept this offer?', 'If I were you, I would take the job.'],
                ['I cannot decide tonight.', 'If I were you, I would sleep on it.']
            ],
            exps: [
                ['加上 now', 'If I were you, I would take the job now.'],
                ['再加上 before they change their mind', 'If I were you, I would take the job now before they change their mind.']
            ]
        }),
        add({
            id: 'starter-integrate',
            title: '合併句：so / because / although / who',
            topic: 'FSI Integration',
            level: 'B1',
            source: 'fsi',
            corePattern: 'clause + linker + clause',
            baseSentence: 'It was raining, so we stayed home.',
            rhythm: 'it was RAIN-ing | SO | we STAYED home'
        }, {
            subs: [
                ['because', 'We stayed home because it was raining.'],
                ['although', 'Although it was raining, we stayed home.'],
                ['and', 'It was raining and we stayed home.'],
                ['but', 'It was raining, but we went out.'],
                ['when', 'When it was raining, we stayed home.']
            ],
            shadows: ['al-THOUGH it was RAIN-ing | we STAYED home'],
            situation: ['解釋為什麼沒去公園。', 'It was raining, so we stayed home.'],
            ints: [
                ['The man is tall. He plays basketball. 用 who', 'The man who is tall plays basketball.'],
                ['I missed the bus. I was late. 用 so', 'I missed the bus, so I was late.'],
                ['She was tired. She finished the work. 用 although', 'Although she was tired, she finished the work.'],
                ['The file is on the desk. I need the file. 用 that', 'I need the file that is on the desk.'],
                ['He left early. He had a meeting. 用 because', 'He left early because he had a meeting.'],
                ['The cafe is cheap. It is near my office. 用 which', 'The cafe which is near my office is cheap.'],
                ['I was hungry. I did not eat. 用 but', 'I was hungry, but I did not eat.'],
                ['She called me. I was in a meeting. 用 while', 'She called me while I was in a meeting.']
            ],
            trans: [
                ['so 改成 because', 'We stayed home because it was raining.'],
                ['改成 although 並調序', 'Although it was raining, we stayed home.']
            ],
            resps: [
                ['Why did you stay home?', 'We stayed home because it was raining.'],
                ['It was raining. What did you do?', 'It was raining, so we stayed home.']
            ]
        }),
        add({
            id: 'starter-relative-who',
            title: '關係子句：who / that / which',
            topic: '把兩句收成一句',
            level: 'B1',
            source: 'fsi',
            corePattern: 'noun + who/that/which + clause',
            baseSentence: 'She is the person who called you.',
            rhythm: 'she is the PER-son | who CALLED you'
        }, {
            subs: [
                ['helped me', 'She is the person who helped me.'],
                ['sent the email', 'She is the person who sent the email.'],
                ['I met yesterday', 'She is the person that I met yesterday.'],
                ['the book / I bought', 'This is the book that I bought.'],
                ['the shop / we like', 'This is the shop that we like.'],
                ['the man / lives next door', 'He is the man who lives next door.'],
                ['the idea / she suggested', 'This is the idea that she suggested.'],
                ['the file / you need', 'This is the file that you need.'],
                ['the people / work here', 'These are the people who work here.'],
                ['the movie / we saw', 'This is the movie that we saw.'],
                ['the reason / I left', 'This is the reason that I left.'],
                ['the place / we met', 'This is the place where we met.'],
                ['the day / I arrived', 'This is the day when I arrived.'],
                ['the woman / I told you about', 'She is the woman who I told you about.'],
                ['the problem / we discussed', 'This is the problem that we discussed.']
            ],
            shadows: ['she is the PER-son | who HELPED me', 'this is the FILE | that you NEED', 'this is the PLACE | where we MET'],
            situation: ['有人問剛才打電話的是誰。', 'She is the person who called you.'],
            trans: [
                ['who 改成 that', 'She is the person that called you.'],
                ['拆成兩句', 'She is the person. She called you.']
            ],
            resps: [
                ['Who called me?', 'She is the person who called you.'],
                ['Which file do I need?', 'This is the file that you need.']
            ],
            ints: [
                ['I know a woman. She speaks five languages.', 'I know a woman who speaks five languages.'],
                ['This is a tool. We use it every day.', 'This is a tool that we use every day.']
            ]
        }),
        add({
            id: 'starter-reported',
            title: '轉述：He said that + 子句',
            topic: '把別人的話轉述出來',
            level: 'B1',
            source: 'fsi',
            corePattern: 'He said that + clause',
            baseSentence: 'He said that he was busy.',
            rhythm: 'he SAID that | he was BU-sy'
        }, {
            subs: [
                ['he would come', 'He said that he would come.'],
                ['he needed help', 'He said that he needed help.'],
                ['he had finished', 'He said that he had finished.'],
                ['it was too late', 'He said that it was too late.'],
                ['she / was tired', 'She said that she was tired.'],
                ['they / would wait', 'They said that they would wait.'],
                ['he could not join', 'He said that he could not join.'],
                ['the train was late', 'He said that the train was late.'],
                ['he did not know', 'He said that he did not know.'],
                ['we should start', 'He said that we should start.'],
                ['he had already left', 'He said that he had already left.'],
                ['it might rain', 'He said that it might rain.'],
                ['he wanted more time', 'He said that he wanted more time.'],
                ['she / would call later', 'She said that she would call later.'],
                ['nobody was there', 'He said that nobody was there.']
            ],
            shadows: ['he SAID that | he would COME', 'she SAID that | she was TIRED', 'he SAID that | he had FIN-ished'],
            situation: ['同事問剛才電話裡那人說什麼。', 'He said that he was busy.'],
            trans: [
                ['改成直接引句', 'He said, "I am busy."'],
                ['said 改成 told me', 'He told me that he was busy.']
            ],
            resps: [
                ['What did he say?', 'He said that he was busy.'],
                ['Is he coming?', 'He said that he would come.']
            ],
            exps: [
                ['加上 this morning', 'He said that he was busy this morning.'],
                ['再加上 and could not talk', 'He said that he was busy this morning and could not talk.']
            ]
        }),
        add({
            id: 'starter-so-that',
            title: '結果：so + 形容詞 + that',
            topic: '程度導致結果',
            level: 'B1',
            source: 'fsi',
            corePattern: 'so + adjective + that + clause',
            baseSentence: 'It was so cold that we stayed inside.',
            rhythm: 'it was SO COLD | that we STAYED | in-SIDE'
        }, {
            subs: [
                ['loud', 'It was so loud that we stayed inside.'],
                ['late', 'It was so late that we stayed inside.'],
                ['noisy', 'It was so noisy that we stayed inside.'],
                ['he left', 'It was so cold that he left.'],
                ['I could not sleep', 'It was so cold that I could not sleep.'],
                ['nobody went out', 'It was so cold that nobody went out.'],
                ['the room / small', 'The room was so small that we stayed inside.'],
                ['she / busy', 'She was so busy that she skipped lunch.'],
                ['the line / long', 'The line was so long that we left.'],
                ['I forgot my name', 'It was so cold that I forgot my name.'],
                ['we gave up', 'It was so cold that we gave up.'],
                ['the coffee / hot', 'The coffee was so hot that I could not drink it.'],
                ['the movie / boring', 'The movie was so boring that we left.'],
                ['I could not think', 'It was so cold that I could not think.'],
                ['we turned back', 'It was so cold that we turned back.']
            ],
            shadows: ['it was SO LATE | that we STAYED | in-SIDE', 'she was SO BU-sy | that we STAYED | in-SIDE', 'it was SO COLD | that I could NOT | SLEEP'],
            situation: ['解釋為什麼沒出門。', 'It was so cold that we stayed inside.'],
            trans: [
                ['改成 too ... to', 'It was too cold to go out.'],
                ['改成 such + noun + that', 'It was such a cold day that we stayed inside.']
            ],
            resps: [
                ['Why did you stay inside?', 'It was so cold that we stayed inside.'],
                ['Why did you leave the movie?', 'The movie was so boring that we left.']
            ],
            exps: [
                ['加上 all afternoon', 'It was so cold that we stayed inside all afternoon.'],
                ['再加上 with the heat on', 'It was so cold that we stayed inside all afternoon with the heat on.']
            ]
        }),
        add({
            id: 'starter-in-order-to',
            title: '目的：in order to + 動詞',
            topic: '為了做某事',
            level: 'B1',
            source: 'chunk',
            corePattern: 'clause + in order to + verb',
            baseSentence: 'I left early in order to catch the train.',
            rhythm: 'I LEFT EAR-ly | in OR-der to | CATCH | the TRAIN'
        }, {
            subs: [
                ['save time', 'I left early in order to save time.'],
                ['avoid traffic', 'I left early in order to avoid traffic.'],
                ['see her', 'I left early in order to see her.'],
                ['get a seat', 'I left early in order to get a seat.'],
                ['finish on time', 'I left early in order to finish on time.'],
                ['I stayed late', 'I stayed late in order to catch the train.'],
                ['I spoke slowly', 'I spoke slowly in order to be understood.'],
                ['I took notes', 'I took notes in order to remember the points.'],
                ['find a quiet place', 'I left early in order to find a quiet place.'],
                ['make a good impression', 'I left early in order to make a good impression.'],
                ['hear better', 'I left early in order to hear better.'],
                ['I moved closer', 'I moved closer in order to hear better.'],
                ['I practiced every day', 'I practiced every day in order to improve.'],
                ['keep my promise', 'I left early in order to keep my promise.'],
                ['not miss it', 'I left early in order not to miss it.']
            ],
            shadows: ['I LEFT EAR-ly | in OR-der to | a-VOID | TRAF-fic', 'I LEFT EAR-ly | in OR-der to | GET | a SEAT', 'I LEFT EAR-ly | in OR-der NOT to | MISS it'],
            situation: ['解釋為何六點就出門。', 'I left early in order to catch the train.'],
            trans: [
                ['改成 so that I could', 'I left early so that I could catch the train.'],
                ['改成 to + 動詞', 'I left early to catch the train.']
            ],
            resps: [
                ['Why did you leave so early?', 'I left early in order to catch the train.'],
                ['Why did you stay late?', 'I stayed late in order to finish on time.']
            ],
            exps: [
                ['加上 this morning', 'I left early this morning in order to catch the train.'],
                ['再加上 at seven', 'I left early this morning in order to catch the train at seven.']
            ]
        }),
        add({
            id: 'starter-although',
            title: '讓步：Although + 子句',
            topic: '雖然…但是…',
            level: 'B1',
            source: 'fsi',
            corePattern: 'Although + clause, clause',
            baseSentence: 'Although I was tired, I kept working.',
            rhythm: 'al-THOUGH I was TIRED | I KEPT WORK-ing'
        }, {
            subs: [
                ['it was raining', 'Although it was raining, I kept working.'],
                ['he said no', 'Although he said no, I kept working.'],
                ['the room was noisy', 'Although the room was noisy, I kept working.'],
                ['I finished it', 'Although I was tired, I finished it.'],
                ['I stayed', 'Although I was tired, I stayed.'],
                ['I smiled', 'Although I was tired, I smiled.'],
                ['she was busy', 'Although she was busy, I kept working.'],
                ['we had little time', 'Although we had little time, I kept working.'],
                ['I did not complain', 'Although I was tired, I did not complain.'],
                ['the plan failed', 'Although I was tired, the plan failed.'],
                ['nobody helped', 'Although I was tired, nobody helped.'],
                ['I went anyway', 'Although I was tired, I went anyway.'],
                ['the data were messy', 'Although the data were messy, I kept working.'],
                ['I still agreed', 'Although I was tired, I still agreed.'],
                ['it looked easy', 'Although it looked easy, I kept working.']
            ],
            shadows: ['al-THOUGH it was RAIN-ing | I KEPT WORK-ing', 'al-THOUGH I was TIRED | I FIN-ished it', 'al-THOUGH I was TIRED | I went A-ny-way'],
            situation: ['有人問你為何不休息。', 'Although I was tired, I kept working.'],
            trans: [
                ['改成 even though', 'Even though I was tired, I kept working.'],
                ['改成 but', 'I was tired, but I kept working.'],
                ['改成 despite', 'Despite being tired, I kept working.']
            ],
            resps: [
                ['You look exhausted. Why continue?', 'Although I was tired, I kept working.'],
                ['It was raining. Did you go?', 'Although it was raining, I went anyway.']
            ],
            exps: [
                ['加上 until midnight', 'Although I was tired, I kept working until midnight.'],
                ['再加上 to meet the deadline', 'Although I was tired, I kept working until midnight to meet the deadline.']
            ]
        }),
        add({
            id: 'starter-despite',
            title: '讓步：Despite + 名詞 / V-ing',
            topic: 'Despite 後面不加完整子句',
            level: 'B2',
            source: 'academic',
            corePattern: 'Despite + noun/V-ing, clause',
            baseSentence: 'Despite the rain, we continued.',
            rhythm: 'de-SPITE the RAIN | we con-TIN-ued'
        }, {
            subs: [
                ['the noise', 'Despite the noise, we continued.'],
                ['the delay', 'Despite the delay, we continued.'],
                ['the cost', 'Despite the cost, we continued.'],
                ['being tired', 'Despite being tired, we continued.'],
                ['the risks', 'Despite the risks, we continued.'],
                ['his age', 'Despite his age, we continued.'],
                ['the criticism', 'Despite the criticism, we continued.'],
                ['feeling sick', 'Despite feeling sick, we continued.'],
                ['the lack of data', 'Despite the lack of data, we continued.'],
                ['these problems', 'Despite these problems, we continued.'],
                ['I finished', 'Despite the rain, I finished.'],
                ['sales rose', 'Despite the rain, sales rose.'],
                ['she stayed calm', 'Despite the rain, she stayed calm.'],
                ['they won', 'Despite the rain, they won.'],
                ['the work got done', 'Despite the rain, the work got done.']
            ],
            shadows: ['de-SPITE the NOISE | we con-TIN-ued', 'de-SPITE be-ing TIRED | we con-TIN-ued', 'de-SPITE the LACK of DA-ta | we con-TIN-ued'],
            situation: ['報告裡承認有限制，但仍繼續。', 'Despite the rain, we continued.'],
            trans: [
                ['改成 although + 子句', 'Although it was raining, we continued.'],
                ['改成 in spite of', 'In spite of the rain, we continued.']
            ],
            resps: [
                ['Did the rain stop you?', 'Despite the rain, we continued.'],
                ['Were the data complete?', 'Despite the lack of data, we continued.']
            ],
            exps: [
                ['加上 for two hours', 'Despite the rain, we continued for two hours.'],
                ['再加上 without a break', 'Despite the rain, we continued for two hours without a break.']
            ]
        }),
        add({
            id: 'starter-the-more',
            title: '越…越…：The more …, the more …',
            topic: '雙重比較',
            level: 'B2',
            source: 'chunk',
            corePattern: 'The + comparative, the + comparative',
            baseSentence: 'The more I practice, the better I get.',
            rhythm: 'the MORE I PRAC-tice | the BET-ter I GET'
        }, {
            subs: [
                ['The harder I work', 'The harder I work, the better I get.'],
                ['The longer I wait', 'The longer I wait, the better I get.'],
                ['the easier it becomes', 'The more I practice, the easier it becomes.'],
                ['the more I understand', 'The more I practice, the more I understand.'],
                ['the less I worry', 'The more I practice, the less I worry.'],
                ['The more I read', 'The more I read, the better I get.'],
                ['The more I listen', 'The more I listen, the better I get.'],
                ['the faster I speak', 'The more I practice, the faster I speak.'],
                ['The less I sleep', 'The less I sleep, the better I get.'],
                ['the worse I feel', 'The more I practice, the worse I feel.'],
                ['The more people come', 'The more people come, the better I get.'],
                ['the more expensive it is', 'The more I practice, the more expensive it is.'],
                ['The sooner we start', 'The sooner we start, the better I get.'],
                ['the happier she is', 'The more I practice, the happier she is.'],
                ['The more you explain', 'The more you explain, the better I get.']
            ],
            shadows: ['the HARD-er I WORK | the BET-ter I GET', 'the MORE I PRAC-tice | the EA-si-er it be-COMES', 'the SOON-er we START | the BET-ter I GET'],
            situation: ['有人問練習有沒有用。', 'The more I practice, the better I get.'],
            trans: [
                ['改成一般比較', 'I get better when I practice more.'],
                ['改成否定方向', 'The more I practice, the less I improve.']
            ],
            resps: [
                ['Does practice help?', 'The more I practice, the better I get.'],
                ['Should we start now?', 'The sooner we start, the better.']
            ],
            exps: [
                ['加上 at speaking', 'The more I practice, the better I get at speaking.'],
                ['再加上 every week', 'The more I practice, the better I get at speaking every week.']
            ]
        }),
        add({
            id: 'starter-not-only',
            title: '遞進：Not only … but also …',
            topic: '兩邊都成立，而且更進一步',
            level: 'B2',
            source: 'academic',
            corePattern: 'Not only X, but also Y',
            baseSentence: 'She is not only smart but also kind.',
            rhythm: 'she is not ON-ly SMART | but AL-so KIND'
        }, {
            subs: [
                ['fast / careful', 'She is not only fast but also careful.'],
                ['clear / useful', 'She is not only clear but also useful.'],
                ['cheap / reliable', 'She is not only cheap but also reliable.'],
                ['this plan / simple / effective', 'This plan is not only simple but also effective.'],
                ['the book / short / deep', 'The book is not only short but also deep.'],
                ['he / writes / speaks', 'He not only writes but also speaks.'],
                ['they / listened / took notes', 'They not only listened but also took notes.'],
                ['I / called / emailed', 'I not only called but also emailed.'],
                ['the results / clear / surprising', 'The results are not only clear but also surprising.'],
                ['the method / new / practical', 'The method is not only new but also practical.'],
                ['we / saved time / saved money', 'We not only saved time but also saved money.'],
                ['it / looks good / works well', 'It not only looks good but also works well.'],
                ['the study / large / careful', 'The study is not only large but also careful.'],
                ['she / teaches / researches', 'She not only teaches but also researches.'],
                ['the city / safe / convenient', 'The city is not only safe but also convenient.']
            ],
            shadows: ['she is not ON-ly FAST | but AL-so CARE-ful', 'the re-SULTS are not ON-ly CLEAR | but AL-so sur-PRI-sing', 'we not ON-ly SAVED time | but AL-so SAVED MON-ey'],
            situation: ['推薦一個人，兩邊優點都要講。', 'She is not only smart but also kind.'],
            trans: [
                ['改成 and', 'She is smart and kind.'],
                ['倒裝 Not only is she', 'Not only is she smart, but she is also kind.']
            ],
            resps: [
                ['What is she like?', 'She is not only smart but also kind.'],
                ['Did the method work?', 'The method is not only new but also practical.']
            ],
            exps: [
                ['加上 to work with', 'She is not only smart but also kind to work with.'],
                ['再加上 on hard projects', 'She is not only smart but also kind to work with on hard projects.']
            ]
        }),
        add({
            id: 'starter-looking-forward',
            title: '期待：I am looking forward to + V-ing',
            topic: 'to 後面接 V-ing，不是原形',
            level: 'B1',
            source: 'chunk',
            corePattern: "I'm looking forward to + V-ing",
            baseSentence: "I'm looking forward to seeing you.",
            rhythm: "I'm LOOK-ing FOR-ward to | SEE-ing you"
        }, {
            subs: [
                ['meeting her', "I'm looking forward to meeting her."],
                ['the weekend', "I'm looking forward to the weekend."],
                ['trying this', "I'm looking forward to trying this."],
                ['hearing from you', "I'm looking forward to hearing from you."],
                ['working with you', "I'm looking forward to working with you."],
                ['your reply', "I'm looking forward to your reply."],
                ['going home', "I'm looking forward to going home."],
                ['the trip', "I'm looking forward to the trip."],
                ['starting the new job', "I'm looking forward to starting the new job."],
                ['reading that book', "I'm looking forward to reading that book."],
                ['she / seeing you', 'She is looking forward to seeing you.'],
                ['we / the break', 'We are looking forward to the break.'],
                ['they / the concert', 'They are looking forward to the concert.'],
                ['getting some rest', "I'm looking forward to getting some rest."],
                ['catching up', "I'm looking forward to catching up."]
            ],
            shadows: ["I'm LOOK-ing FOR-ward to | HEAR-ing from you", "I'm LOOK-ing FOR-ward to | WORK-ing with you", "I'm LOOK-ing FOR-ward to | the WEEK-end"],
            situation: ['信末收尾。', "I'm looking forward to seeing you."],
            trans: [
                ['改成過去', 'I was looking forward to seeing you.'],
                ['改成否定', "I'm not looking forward to seeing you."]
            ],
            resps: [
                ['Are you excited about the meeting?', "Yes, I'm looking forward to seeing you."],
                ['Any plans for Friday?', "I'm looking forward to the weekend."]
            ],
            exps: [
                ['加上 tomorrow', "I'm looking forward to seeing you tomorrow."],
                ['再加上 in Toronto', "I'm looking forward to seeing you tomorrow in Toronto."]
            ]
        }),
        add({
            id: 'starter-find-it-hard',
            title: '難易：I find it hard to + 動詞',
            topic: '評價做某事困不困難',
            level: 'B1',
            source: 'chunk',
            corePattern: 'I find it + adj + to + verb',
            baseSentence: 'I find it hard to focus.',
            rhythm: 'I FIND it HARD | to FO-cus'
        }, {
            subs: [
                ['easy', 'I find it easy to focus.'],
                ['difficult', 'I find it difficult to focus.'],
                ['impossible', 'I find it impossible to focus.'],
                ['to sleep', 'I find it hard to sleep.'],
                ['to say no', 'I find it hard to say no.'],
                ['to remember names', 'I find it hard to remember names.'],
                ['to speak up', 'I find it hard to speak up.'],
                ['to trust that', 'I find it hard to trust that.'],
                ['to keep up', 'I find it hard to keep up.'],
                ['to explain', 'I find it hard to explain.'],
                ['she / hard / to wait', 'She finds it hard to wait.'],
                ['we / useful / to wait', 'We find it useful to wait.'],
                ['they / strange / to wait', 'They find it strange to wait.'],
                ['to believe', 'I find it hard to believe.'],
                ['to start', 'I find it hard to start.']
            ],
            shadows: ['I FIND it HARD | to SAY | NO', 'I FIND it HARD | to re-MEM-ber | NAMES', 'I FIND it IM-pos-si-ble | to FO-cus'],
            situation: ['開放辦公室很吵。', 'I find it hard to focus.'],
            trans: [
                ['改成 It is hard for me to', 'It is hard for me to focus.'],
                ['改成否定', 'I do not find it hard to focus.']
            ],
            resps: [
                ['Why are you wearing headphones?', 'I find it hard to focus.'],
                ['Can you remember everyone?', 'I find it hard to remember names.']
            ],
            exps: [
                ['加上 in this room', 'I find it hard to focus in this room.'],
                ['再加上 when people talk', 'I find it hard to focus in this room when people talk.']
            ]
        }),
        add({
            id: 'starter-have-trouble',
            title: '卡住：I have trouble + V-ing',
            topic: '做某事不順利',
            level: 'B1',
            source: 'chunk',
            corePattern: 'have trouble + V-ing',
            baseSentence: 'I have trouble sleeping.',
            rhythm: 'I have TROU-ble | SLEEP-ing'
        }, {
            subs: [
                ['hearing you', 'I have trouble hearing you.'],
                ['finding the place', 'I have trouble finding the place.'],
                ['remembering names', 'I have trouble remembering names.'],
                ['waking up', 'I have trouble waking up.'],
                ['saying no', 'I have trouble saying no.'],
                ['keeping up', 'I have trouble keeping up.'],
                ['understanding him', 'I have trouble understanding him.'],
                ['parking here', 'I have trouble parking here.'],
                ['finishing on time', 'I have trouble finishing on time.'],
                ['staying focused', 'I have trouble staying focused.'],
                ['she / sleeping', 'She has trouble sleeping.'],
                ['we / finding seats', 'We have trouble finding seats.'],
                ['they / arriving on time', 'They have trouble arriving on time.'],
                ['explaining this', 'I have trouble explaining this.'],
                ['letting go', 'I have trouble letting go.']
            ],
            shadows: ['I have TROU-ble | HEAR-ing you', 'I have TROU-ble | re-MEM-ber-ing | NAMES', 'I have TROU-ble | STAY-ing | FO-cused'],
            situation: ['電話訊號不好。', 'I have trouble hearing you.'],
            trans: [
                ['改成 I have a hard time + V-ing', 'I have a hard time sleeping.'],
                ['改成否定', 'I do not have trouble sleeping.']
            ],
            resps: [
                ['You look tired.', 'I have trouble sleeping.'],
                ['Can you hear me now?', 'I have trouble hearing you.']
            ],
            exps: [
                ['加上 at night', 'I have trouble sleeping at night.'],
                ['再加上 when I drink coffee', 'I have trouble sleeping at night when I drink coffee.']
            ]
        }),
        add({
            id: 'starter-make-sb-do',
            title: '使役：make someone + 原形動詞',
            topic: '強迫或促使別人做',
            level: 'B1',
            source: 'fsi',
            corePattern: 'make + person + verb',
            baseSentence: 'They made me wait.',
            rhythm: 'they MADE me | WAIT'
        }, {
            subs: [
                ['leave', 'They made me leave.'],
                ['repeat it', 'They made me repeat it.'],
                ['sign this', 'They made me sign this.'],
                ['change my plan', 'They made me change my plan.'],
                ['stay late', 'They made me stay late.'],
                ['she / wait', 'She made me wait.'],
                ['the noise / jump', 'The noise made me jump.'],
                ['this / think', 'This made me think.'],
                ['him / apologize', 'They made him apologize.'],
                ['us / laugh', 'They made us laugh.'],
                ['her / cry', 'They made her cry.'],
                ['me / try again', 'They made me try again.'],
                ['the movie / cry', 'The movie made me cry.'],
                ['the news / worry', 'The news made me worry.'],
                ['my boss / stay', 'My boss made me stay.']
            ],
            shadows: ['they MADE me | STAY | LATE', 'this MADE me | THINK', 'they MADE us | LAUGH'],
            situation: ['櫃台讓你排了四十分鐘。', 'They made me wait.'],
            trans: [
                ['改成被動 I was made to', 'I was made to wait.'],
                ['改成 let（允許）', 'They let me wait.'],
                ['改成 get someone to', 'They got me to wait.']
            ],
            resps: [
                ['Why are you so late?', 'They made me wait.'],
                ['Did you want to stay?', 'No, my boss made me stay.']
            ],
            exps: [
                ['加上 for an hour', 'They made me wait for an hour.'],
                ['再加上 without an explanation', 'They made me wait for an hour without an explanation.']
            ]
        }),
        add({
            id: 'starter-get-sb-to',
            title: '說服：get someone to + 動詞',
            topic: '讓別人肯去做',
            level: 'B1',
            source: 'spoken',
            corePattern: 'get + person + to + verb',
            baseSentence: 'I will get him to call you.',
            rhythm: "I'll GET him to | CALL you"
        }, {
            subs: [
                ['help us', 'I will get him to help us.'],
                ['join the meeting', 'I will get him to join the meeting.'],
                ['send the file', 'I will get him to send the file.'],
                ['sign it', 'I will get him to sign it.'],
                ['come earlier', 'I will get him to come earlier.'],
                ['she / explain', 'I will get her to explain.'],
                ['them / wait', 'I will get them to wait.'],
                ['someone / check this', 'I will get someone to check this.'],
                ['my brother / pick you up', 'I will get my brother to pick you up.'],
                ['the shop / replace it', 'I will get the shop to replace it.'],
                ['I got him to agree', 'I got him to agree.'],
                ['Can you get her to wait', 'Can you get her to wait?'],
                ['try again', 'I will get him to try again.'],
                ['fix this', 'I will get him to fix this.'],
                ['talk to her', 'I will get him to talk to her.']
            ],
            shadows: ["I'll GET him to | HELP us", "I'll GET her to | ex-PLAIN", "I'll GET some-one to | CHECK this"],
            situation: ['對方聯絡不到那個人。', 'I will get him to call you.'],
            trans: [
                ['改成過去', 'I got him to call you.'],
                ['改成 make（更強迫）', 'I will make him call you.']
            ],
            resps: [
                ['He never calls me back.', 'I will get him to call you.'],
                ['We need a signature.', 'I will get him to sign it.']
            ],
            exps: [
                ['加上 today', 'I will get him to call you today.'],
                ['再加上 before noon', 'I will get him to call you today before noon.']
            ]
        }),
        add({
            id: 'starter-keep-ving',
            title: '持續：keep + V-ing',
            topic: '反覆或停不下來',
            level: 'A2',
            source: 'chunk',
            corePattern: 'keep + V-ing',
            baseSentence: 'I keep making the same mistake.',
            rhythm: 'I KEEP | MAK-ing | the SAME | mis-TAKE'
        }, {
            subs: [
                ['forgetting her name', 'I keep forgetting her name.'],
                ['thinking about it', 'I keep thinking about it.'],
                ['losing my keys', 'I keep losing my keys.'],
                ['waking up early', 'I keep waking up early.'],
                ['checking my phone', 'I keep checking my phone.'],
                ['asking the same question', 'I keep asking the same question.'],
                ['getting lost', 'I keep getting lost.'],
                ['saying the wrong word', 'I keep saying the wrong word.'],
                ['she / calling', 'She keeps calling.'],
                ['they / changing the plan', 'They keep changing the plan.'],
                ['it / happening', 'It keeps happening.'],
                ['we / missing the bus', 'We keep missing the bus.'],
                ['he / interrupting', 'He keeps interrupting.'],
                ['trying', 'I keep trying.'],
                ['hoping', 'I keep hoping.']
            ],
            shadows: ['I KEEP | for-GET-ting | her NAME', 'I KEEP | CHECK-ing | my PHONE', 'it KEEPS | HAP-pen-ing'],
            situation: ['同樣的錯第三次出現。', 'I keep making the same mistake.'],
            trans: [
                ['改成過去', 'I kept making the same mistake.'],
                ['改成 stop + V-ing', 'I stopped making the same mistake.']
            ],
            resps: [
                ['Why are you frustrated?', 'I keep making the same mistake.'],
                ['Why is your phone in your hand again?', 'I keep checking my phone.']
            ],
            exps: [
                ['加上 in this exercise', 'I keep making the same mistake in this exercise.'],
                ['再加上 even after practice', 'I keep making the same mistake in this exercise even after practice.']
            ]
        }),
        add({
            id: 'starter-end-up',
            title: '結果變成：end up + V-ing',
            topic: '最後落到某個結果',
            level: 'B1',
            source: 'chunk',
            corePattern: 'end up + V-ing',
            baseSentence: 'We ended up staying home.',
            rhythm: 'we END-ed UP | STAY-ing | HOME'
        }, {
            subs: [
                ['leaving early', 'We ended up leaving early.'],
                ['taking a taxi', 'We ended up taking a taxi.'],
                ['paying extra', 'We ended up paying extra.'],
                ['asking for help', 'We ended up asking for help.'],
                ['missing the train', 'We ended up missing the train.'],
                ['I / sleeping on the floor', 'I ended up sleeping on the floor.'],
                ['she / taking the job', 'She ended up taking the job.'],
                ['they / selling the house', 'They ended up selling the house.'],
                ['doing it ourselves', 'We ended up doing it ourselves.'],
                ['talking for hours', 'We ended up talking for hours.'],
                ['going anyway', 'We ended up going anyway.'],
                ['buying both', 'We ended up buying both.'],
                ['waiting outside', 'We ended up waiting outside.'],
                ['changing the plan', 'We ended up changing the plan.'],
                ['laughing about it', 'We ended up laughing about it.']
            ],
            shadows: ['we END-ed UP | TAK-ing | a TAX-i', 'we END-ed UP | MISS-ing | the TRAIN', 'we END-ed UP | TALK-ing | for HOURS'],
            situation: ['原定出門，最後沒去成。', 'We ended up staying home.'],
            trans: [
                ['改成現在', 'We end up staying home.'],
                ['改成未來', 'We will end up staying home.']
            ],
            resps: [
                ['Did you go out last night?', 'No, we ended up staying home.'],
                ['How did you get there?', 'We ended up taking a taxi.']
            ],
            exps: [
                ['加上 because of the rain', 'We ended up staying home because of the rain.'],
                ['再加上 and watching a movie', 'We ended up staying home because of the rain and watching a movie.']
            ]
        }),
        add({
            id: 'starter-its-worth',
            title: '值得：It is worth + V-ing',
            topic: '划不划算、值不值得',
            level: 'B1',
            source: 'chunk',
            corePattern: "It's worth + V-ing",
            baseSentence: 'It is worth trying.',
            rhythm: "it's WORTH | TRY-ing"
        }, {
            subs: [
                ['waiting', 'It is worth waiting.'],
                ['checking again', 'It is worth checking again.'],
                ['reading twice', 'It is worth reading twice.'],
                ['the money', 'It is worth the money.'],
                ['a visit', 'It is worth a visit.'],
                ['asking', 'It is worth asking.'],
                ['keeping', 'It is worth keeping.'],
                ['seeing in person', 'It is worth seeing in person.'],
                ['the risk', 'It is worth the risk.'],
                ['talking about', 'It is worth talking about.'],
                ['not worth waiting', 'It is not worth waiting.'],
                ['saving', 'It is worth saving.'],
                ['fixing', 'It is worth fixing.'],
                ['another look', 'It is worth another look.'],
                ['remembering', 'It is worth remembering.']
            ],
            shadows: ["it's WORTH | CHECK-ing | a-GAIN", "it's WORTH | SEE-ing | in PER-son", "it's NOT WORTH | WAI-ting"],
            situation: ['朋友猶豫要不要再試一次。', 'It is worth trying.'],
            trans: [
                ['改成否定', 'It is not worth trying.'],
                ['改成疑問', 'Is it worth trying?']
            ],
            resps: [
                ['Should I try one more time?', 'It is worth trying.'],
                ['Should we wait in this line?', 'It is not worth waiting.']
            ],
            exps: [
                ['加上 at least once', 'It is worth trying at least once.'],
                ['再加上 before you give up', 'It is worth trying at least once before you give up.']
            ]
        }),
        add({
            id: 'starter-dont-think',
            title: '看法：I do not think + 子句',
            topic: '高頻口語語塊',
            level: 'A2',
            source: 'chunk',
            corePattern: "I don't think + clause",
            baseSentence: "I don't think so.",
            rhythm: "I DON'T | THINK so"
        }, {
            subs: [
                ["it's a good idea", "I don't think it's a good idea."],
                ["he's coming", "I don't think he's coming."],
                ['we need that', "I don't think we need that."],
                ['it will rain', "I don't think it will rain."],
                ['she knows', "I don't think she knows."],
                ['this will work', "I don't think this will work."],
                ["I'm ready", "I don't think I'm ready."],
                ['they agree', "I don't think they agree."],
                ["it's too late", "I don't think it's too late."],
                ['we should wait', "I don't think we should wait."],
                ['that is fair', "I don't think that is fair."],
                ['I can finish tonight', "I don't think I can finish tonight."],
                ['anyone noticed', "I don't think anyone noticed."],
                ['it matters', "I don't think it matters."],
                ['we have a choice', "I don't think we have a choice."]
            ],
            shadows: ["I DON'T | THINK | it's a GOOD | i-DE-a", "I DON'T | THINK | this will WORK", "I DON'T | THINK | it MAT-ters"],
            situation: ['有人問：Is this a good idea?', "I don't think so."],
            trans: [
                ['改成肯定', 'I think so.'],
                ['改成過去', "I didn't think so."],
                ['改成疑問', 'Do you think so?']
            ],
            resps: [
                ['Will it rain later?', "I don't think so."],
                ['Should we wait?', "I don't think we should wait."]
            ],
            exps: [
                ['加上 really', "I don't really think so."],
                ['再加上 at this point', "I don't really think so at this point."]
            ]
        }),
        add({
            id: 'starter-im-afraid',
            title: '婉拒：I am afraid + 子句',
            topic: '客氣地說不行、抱歉',
            level: 'B1',
            source: 'chunk',
            corePattern: "I'm afraid + clause",
            baseSentence: "I'm afraid I can't come.",
            rhythm: "I'm a-FRAID | I CAN'T | COME"
        }, {
            subs: [
                ['that is not possible', "I'm afraid that is not possible."],
                ['I have to go', "I'm afraid I have to go."],
                ['we are fully booked', "I'm afraid we are fully booked."],
                ['I do not know', "I'm afraid I do not know."],
                ['I disagree', "I'm afraid I disagree."],
                ['you are too late', "I'm afraid you are too late."],
                ['I already have plans', "I'm afraid I already have plans."],
                ['this is the last one', "I'm afraid this is the last one."],
                ['I cannot help with that', "I'm afraid I cannot help with that."],
                ['we missed it', "I'm afraid we missed it."],
                ['I need more time', "I'm afraid I need more time."],
                ['it is sold out', "I'm afraid it is sold out."],
                ['I have bad news', "I'm afraid I have bad news."],
                ['that will not work', "I'm afraid that will not work."],
                ['I must say no', "I'm afraid I must say no."]
            ],
            shadows: ["I'm a-FRAID | that is NOT | POS-si-ble", "I'm a-FRAID | I have to GO", "I'm a-FRAID | I dis-a-GREE"],
            situation: ['朋友臨時約你今晚出門。', "I'm afraid I can't come."],
            trans: [
                ['改成直接 I cannot', 'I cannot come.'],
                ['改成過去', "I was afraid I couldn't come."]
            ],
            resps: [
                ['Can you join us tonight?', "I'm afraid I can't come."],
                ['Is this still available?', "I'm afraid it is sold out."]
            ],
            exps: [
                ['加上 tonight', "I'm afraid I can't come tonight."],
                ['再加上 because I have to work', "I'm afraid I can't come tonight because I have to work."]
            ]
        }),
        add({
            id: 'starter-i-was-wondering',
            title: '試探：I was wondering if …',
            topic: '非常客氣地開口',
            level: 'B1',
            source: 'chunk',
            corePattern: 'I was wondering if + clause',
            baseSentence: 'I was wondering if you are free tomorrow.',
            rhythm: 'I was WON-der-ing if | you are FREE | to-MOR-row'
        }, {
            subs: [
                ['you could help me', 'I was wondering if you could help me.'],
                ['this seat is taken', 'I was wondering if this seat is taken.'],
                ['we could talk later', 'I was wondering if we could talk later.'],
                ['you had seen this', 'I was wondering if you had seen this.'],
                ['I could leave early', 'I was wondering if I could leave early.'],
                ['you wanted to join', 'I was wondering if you wanted to join.'],
                ['that still works', 'I was wondering if that still works.'],
                ['you received my email', 'I was wondering if you received my email.'],
                ['we should wait', 'I was wondering if we should wait.'],
                ['I might ask a question', 'I was wondering if I might ask a question.'],
                ['you have a minute', 'I was wondering if you have a minute.'],
                ['this is a good time', 'I was wondering if this is a good time.'],
                ['you could review this', 'I was wondering if you could review this.'],
                ['the meeting is still on', 'I was wondering if the meeting is still on.'],
                ['I could get your opinion', 'I was wondering if I could get your opinion.']
            ],
            shadows: ['I was WON-der-ing if | you could HELP me', 'I was WON-der-ing if | you have a MI-nute', 'I was WON-der-ing if | this is a GOOD | TIME'],
            situation: ['寫信約時間，不想太直接。', 'I was wondering if you are free tomorrow.'],
            trans: [
                ['改成直接 Are you free', 'Are you free tomorrow?'],
                ['改成 Could you', 'Could you tell me if you are free tomorrow?']
            ],
            resps: [
                ['What did you want to ask?', 'I was wondering if you are free tomorrow.'],
                ['Do you need something?', 'I was wondering if you could help me.']
            ],
            exps: [
                ['加上 afternoon', 'I was wondering if you are free tomorrow afternoon.'],
                ['再加上 for a short call', 'I was wondering if you are free tomorrow afternoon for a short call.']
            ]
        }),
        add({
            id: 'starter-it-depends',
            title: '視情況：It depends on + 名詞',
            topic: '不立刻給死答案',
            level: 'A2',
            source: 'chunk',
            corePattern: 'It depends on + noun / wh-clause',
            baseSentence: 'It depends on the weather.',
            rhythm: 'it de-PENDS on | the WEATH-er'
        }, {
            subs: [
                ['the price', 'It depends on the price.'],
                ['the time', 'It depends on the time.'],
                ['the situation', 'It depends on the situation.'],
                ['what she says', 'It depends on what she says.'],
                ['how I feel', 'It depends on how I feel.'],
                ['where we meet', 'It depends on where we meet.'],
                ['how much it costs', 'It depends on how much it costs.'],
                ['whether I finish', 'It depends on whether I finish.'],
                ['the traffic', 'It depends on the traffic.'],
                ['your schedule', 'It depends on your schedule.'],
                ['the context', 'It depends on the context.'],
                ['who is coming', 'It depends on who is coming.'],
                ['how urgent it is', 'It depends on how urgent it is.'],
                ['a few things', 'It depends on a few things.'],
                ['what you mean', 'It depends on what you mean.']
            ],
            shadows: ['it de-PENDS on | the PRICE', 'it de-PENDS on | what she SAYS', 'it de-PENDS on | how ur-GENT | it IS'],
            situation: ['朋友問週末出不出去。', 'It depends on the weather.'],
            trans: [
                ['改成簡短 It depends', 'It depends.'],
                ['改成 That depends', 'That depends on the weather.']
            ],
            resps: [
                ['Are you going out this weekend?', 'It depends on the weather.'],
                ['Can you join us?', 'It depends on the time.']
            ],
            exps: [
                ['加上 tomorrow', 'It depends on the weather tomorrow.'],
                ['再加上 and how tired I am', 'It depends on the weather tomorrow and how tired I am.']
            ]
        }),
        add({
            id: 'starter-as-soon-as',
            title: '時間：as soon as + 子句',
            topic: '一…就…',
            level: 'A2',
            source: 'chunk',
            corePattern: 'I will + verb + as soon as + clause',
            baseSentence: 'I will call you as soon as I arrive.',
            rhythm: 'I will CALL you | as SOON as | I ar-RIVE'
        }, {
            subs: [
                ['get home', 'I will call you as soon as I get home.'],
                ['finish work', 'I will call you as soon as I finish work.'],
                ['hear back', 'I will call you as soon as I hear back.'],
                ['land', 'I will call you as soon as I land.'],
                ['she / arrive', 'She will call you as soon as she arrives.'],
                ['email you', 'I will email you as soon as I arrive.'],
                ['let you know', 'I will let you know as soon as I arrive.'],
                ['the meeting ends', 'I will call you as soon as the meeting ends.'],
                ['I can', 'I will call you as soon as I can.'],
                ['we find a table', 'I will call you as soon as we find a table.'],
                ['I have the answer', 'I will call you as soon as I have the answer.'],
                ['it is ready', 'I will call you as soon as it is ready.'],
                ['I see him', 'I will call you as soon as I see him.'],
                ['the rain stops', 'I will call you as soon as the rain stops.'],
                ['I get paid', 'I will call you as soon as I get paid.']
            ],
            shadows: ['I will CALL you | as SOON as | I get HOME', 'I will LET you KNOW | as SOON as | I ar-RIVE', 'I will CALL you | as SOON as | I CAN'],
            situation: ['登機前傳訊給家人。', 'I will call you as soon as I land.'],
            trans: [
                ['改成過去', 'I called you as soon as I arrived.'],
                ['改成否定', 'I will not call you as soon as I arrive.']
            ],
            resps: [
                ['When will you call?', 'I will call you as soon as I arrive.'],
                ['When can you send the file?', 'I will send it as soon as I can.']
            ],
            exps: [
                ['開頭加 Do not worry,', 'Do not worry, I will call you as soon as I arrive.'],
                ['再加上 tonight', 'Do not worry, I will call you as soon as I arrive tonight.']
            ]
        }),
        add({
            id: 'starter-make-collocation',
            title: '搭配：make + 名詞',
            topic: 'make a decision / mistake / plan',
            level: 'A2',
            source: 'chunk',
            corePattern: 'make + noun',
            baseSentence: 'I need to make a decision.',
            rhythm: 'I NEED to | MAKE | a de-CI-sion'
        }, {
            subs: [
                ['a plan', 'I need to make a plan.'],
                ['a phone call', 'I need to make a phone call.'],
                ['an appointment', 'I need to make an appointment.'],
                ['progress', 'I need to make progress.'],
                ['a list', 'I need to make a list.'],
                ['a suggestion', 'I need to make a suggestion.'],
                ['an effort', 'I need to make an effort.'],
                ['a reservation', 'I need to make a reservation.'],
                ['a point', 'I need to make a point.'],
                ['sense of this', 'I need to make sense of this.'],
                ['room', 'I need to make room.'],
                ['a change', 'I need to make a change.'],
                ['an excuse', 'I need to make an excuse.'],
                ['a difference', 'I need to make a difference.'],
                ['sure', 'I need to make sure.']
            ],
            shadows: ['I NEED to | MAKE | a PLAN', 'I NEED to | MAKE | an ap-POINT-ment', 'I NEED to | MAKE | SURE'],
            situation: ['兩個方案必須今晚選定。', 'I need to make a decision.'],
            trans: [
                ['改成過去', 'I needed to make a decision.'],
                ['主詞 she', 'She needs to make a decision.']
            ],
            resps: [
                ['We cannot wait any longer.', 'I need to make a decision.'],
                ['This week is a mess.', 'I need to make a plan.']
            ],
            exps: [
                ['加上 tonight', 'I need to make a decision tonight.'],
                ['再加上 about the offer', 'I need to make a decision tonight about the offer.']
            ]
        }),
        add({
            id: 'starter-take-collocation',
            title: '搭配：take + 名詞',
            topic: 'take a break / look / risk',
            level: 'A2',
            source: 'chunk',
            corePattern: 'take + noun',
            baseSentence: 'I need to take a break.',
            rhythm: 'I NEED to | TAKE | a BREAK'
        }, {
            subs: [
                ['a look', 'I need to take a look.'],
                ['a shower', 'I need to take a shower.'],
                ['a seat', 'I need to take a seat.'],
                ['notes', 'I need to take notes.'],
                ['a photo', 'I need to take a photo.'],
                ['responsibility', 'I need to take responsibility.'],
                ['a risk', 'I need to take a risk.'],
                ['a taxi', 'I need to take a taxi.'],
                ['the lead', 'I need to take the lead.'],
                ['my time', 'I need to take my time.'],
                ['care of this', 'I need to take care of this.'],
                ['a chance', 'I need to take a chance.'],
                ['this seriously', 'I need to take this seriously.'],
                ['a message', 'I need to take a message.'],
                ['the next step', 'I need to take the next step.']
            ],
            shadows: ['I NEED to | TAKE | a LOOK', 'I NEED to | TAKE | CARE of this', 'I NEED to | TAKE | this SE-ri-ous-ly'],
            situation: ['連續工作三小時。', 'I need to take a break.'],
            trans: [
                ['改成 Why do you not', "Why don't you take a break?"],
                ['改成過去', 'I needed to take a break.']
            ],
            resps: [
                ['You look tired.', 'I need to take a break.'],
                ['Can you check this email?', 'I need to take a look.']
            ],
            exps: [
                ['加上 for ten minutes', 'I need to take a break for ten minutes.'],
                ['再加上 before the next meeting', 'I need to take a break for ten minutes before the next meeting.']
            ]
        }),
        add({
            id: 'starter-have-collocation',
            title: '搭配：have + 名詞',
            topic: 'have a look / meeting / problem',
            level: 'A2',
            source: 'chunk',
            corePattern: 'have + noun',
            baseSentence: 'I need to have a look.',
            rhythm: 'I NEED to | HAVE | a LOOK'
        }, {
            subs: [
                ['a meeting', 'I need to have a meeting.'],
                ['a talk', 'I need to have a talk.'],
                ['a problem with this', 'I have a problem with this.'],
                ['a question', 'I have a question.'],
                ['lunch', 'I need to have lunch.'],
                ['a minute', 'I need to have a minute.'],
                ['an idea', 'I need to have an idea.'],
                ['a chance', 'I need to have a chance.'],
                ['a word with you', 'I need to have a word with you.'],
                ['fun', 'I need to have fun.'],
                ['a rest', 'I need to have a rest.'],
                ['no idea', 'I have no idea.'],
                ['a feeling', 'I have a feeling.'],
                ['second thoughts', 'I have second thoughts.'],
                ['nothing to do with it', 'I have nothing to do with it.']
            ],
            shadows: ['I NEED to | HAVE | a MEE-ting', 'I NEED to | HAVE | a WORD with you', 'I have NO | i-DE-a'],
            situation: ['想先看一眼檔案再決定。', 'I need to have a look.'],
            trans: [
                ['改成 Can I', 'Can I have a look?'],
                ['改成過去', 'I needed to have a look.']
            ],
            resps: [
                ['The file just arrived.', 'I need to have a look.'],
                ['Are you free later?', 'I need to have a meeting.']
            ],
            exps: [
                ['加上 at this first', 'I need to have a look at this first.'],
                ['再加上 before I decide', 'I need to have a look at this first before I decide.']
            ]
        }),
        add({
            id: 'starter-would-rather',
            title: '偏好：I would rather + 原形動詞',
            topic: '比較想做哪一件',
            level: 'B1',
            source: 'spoken',
            corePattern: "I'd rather + verb",
            baseSentence: "I'd rather stay home.",
            rhythm: "I'd RA-ther | STAY | HOME"
        }, {
            subs: [
                ['wait', "I'd rather wait."],
                ['walk', "I'd rather walk."],
                ['not say', "I'd rather not say."],
                ['do it later', "I'd rather do it later."],
                ['eat here', "I'd rather eat here."],
                ['go alone', "I'd rather go alone."],
                ['keep this simple', "I'd rather keep this simple."],
                ['talk tomorrow', "I'd rather talk tomorrow."],
                ['not go', "I'd rather not go."],
                ['pay now', "I'd rather pay now."],
                ['take the train', "I'd rather take the train."],
                ['leave it', "I'd rather leave it."],
                ['she / stay', "She'd rather stay."],
                ['we / wait', "We'd rather wait."],
                ['not discuss this now', "I'd rather not discuss this now."]
            ],
            shadows: ["I'd RA-ther | NOT | SAY", "I'd RA-ther | KEEP this | SIM-ple", "I'd RA-ther | NOT | GO"],
            situation: ['朋友約酒吧，你只想回家。', "I'd rather stay home."],
            trans: [
                ['改成 I prefer to', 'I prefer to stay home.'],
                ['加上 than go out', "I'd rather stay home than go out."]
            ],
            resps: [
                ['Do you want to go out?', "I'd rather stay home."],
                ['Can I ask what happened?', "I'd rather not say."]
            ],
            exps: [
                ['加上 tonight', "I'd rather stay home tonight."],
                ['再加上 than sit in traffic', "I'd rather stay home tonight than sit in traffic."]
            ]
        }),
        add({
            id: 'starter-had-better',
            title: '警告：You had better + 原形動詞',
            topic: '最好照做，不然有後果',
            level: 'B1',
            source: 'spoken',
            corePattern: "you'd better + verb",
            baseSentence: "You'd better leave now.",
            rhythm: "you'd BET-ter | LEAVE | NOW"
        }, {
            subs: [
                ['hurry', "You'd better hurry."],
                ['check again', "You'd better check again."],
                ['tell her', "You'd better tell her."],
                ['take an umbrella', "You'd better take an umbrella."],
                ['not be late', "You'd better not be late."],
                ['save that file', "You'd better save that file."],
                ['ask first', "You'd better ask first."],
                ['get some rest', "You'd better get some rest."],
                ['apologize', "You'd better apologize."],
                ['I / go', "I'd better go."],
                ['we / start', "We'd better start."],
                ['not forget', "You'd better not forget."],
                ['call them back', "You'd better call them back."],
                ['read the contract', "You'd better read the contract."],
                ['sit down', "You'd better sit down."]
            ],
            shadows: ["you'd BET-ter | HUR-ry", "you'd BET-ter | NOT | be LATE", "we'd BET-ter | START"],
            situation: ['最後一班車快開了。', "You'd better leave now."],
            trans: [
                ['改成 You should', 'You should leave now.'],
                ['改成否定', "You'd better not leave now."]
            ],
            resps: [
                ['The last train is at 10:40.', "You'd better leave now."],
                ['It looks like rain.', "You'd better take an umbrella."]
            ],
            exps: [
                ['加上 or you will miss it', "You'd better leave now or you will miss it."],
                ['再加上 the last train', "You'd better leave now or you will miss the last train."]
            ]
        }),
        add({
            id: 'starter-paper-aims',
            title: '學術目的：This paper aims to + 動詞',
            topic: '介紹研究要做什麼',
            level: 'B2',
            source: 'academic',
            corePattern: 'This paper aims to + verb + object',
            baseSentence: 'This paper aims to examine the main causes.',
            rhythm: 'this PA-per | AIMS to | ex-AM-ine | the MAIN | CAU-ses'
        }, {
            subs: [
                ['explore', 'This paper aims to explore the main causes.'],
                ['compare', 'This paper aims to compare the main causes.'],
                ['explain', 'This paper aims to explain the main causes.'],
                ['identify', 'This paper aims to identify the main causes.'],
                ['evaluate', 'This paper aims to evaluate the main causes.'],
                ['the key differences', 'This paper aims to examine the key differences.'],
                ['recent changes', 'This paper aims to examine recent changes.'],
                ['the effects of stress', 'This paper aims to examine the effects of stress.'],
                ['this study', 'This study aims to examine the main causes.'],
                ['this chapter', 'This chapter aims to examine the main causes.'],
                ['describe', 'This paper aims to describe the main causes.'],
                ['test', 'This paper aims to test the main causes.'],
                ['review', 'This paper aims to review the main causes.'],
                ['clarify', 'This paper aims to clarify the main causes.'],
                ['this article', 'This article aims to examine the main causes.']
            ],
            shadows: ['this PA-per | AIMS to | ex-PLORE | the MAIN | CAU-ses', 'this STU-dy | AIMS to | ex-AM-ine | the MAIN | CAU-ses', 'this PA-per | AIMS to | i-DEN-ti-fy | the MAIN | CAU-ses'],
            situation: ['口頭報告開頭。', 'This paper aims to examine the main causes.'],
            trans: [
                ['改成 The purpose of this paper is to', 'The purpose of this paper is to examine the main causes.'],
                ['改成過去', 'This paper aimed to examine the main causes.']
            ],
            resps: [
                ['What is the aim of this paper?', 'This paper aims to examine the main causes.'],
                ['What does this chapter do?', 'This chapter aims to examine the main causes.']
            ],
            exps: [
                ['加上 of this trend', 'This paper aims to examine the main causes of this trend.'],
                ['再加上 in urban areas', 'This paper aims to examine the main causes of this trend in urban areas.']
            ]
        }),
        add({
            id: 'starter-purpose-of',
            title: '學術目的：The purpose of this study is to',
            topic: '比 aims to 更完整的開場',
            level: 'B2',
            source: 'academic',
            corePattern: 'The purpose of this study is to + verb',
            baseSentence: 'The purpose of this study is to test this claim.',
            rhythm: 'the PUR-pose of this STU-dy | is to TEST | this CLAIM'
        }, {
            subs: [
                ['measure the effect', 'The purpose of this study is to measure the effect.'],
                ['compare two groups', 'The purpose of this study is to compare two groups.'],
                ['fill this gap', 'The purpose of this study is to fill this gap.'],
                ['replicate earlier work', 'The purpose of this study is to replicate earlier work.'],
                ['this paper', 'The purpose of this paper is to test this claim.'],
                ['this chapter', 'The purpose of this chapter is to test this claim.'],
                ['this section', 'The purpose of this section is to test this claim.'],
                ['explain the method', 'The purpose of this study is to explain the method.'],
                ['offer a new account', 'The purpose of this study is to offer a new account.'],
                ['document the change', 'The purpose of this study is to document the change.'],
                ['assess the risk', 'The purpose of this study is to assess the risk.'],
                ['identify patterns', 'The purpose of this study is to identify patterns.'],
                ['challenge this view', 'The purpose of this study is to challenge this view.'],
                ['extend previous findings', 'The purpose of this study is to extend previous findings.'],
                ['provide evidence', 'The purpose of this study is to provide evidence.']
            ],
            shadows: ['the PUR-pose of this STU-dy | is to FILL | this GAP', 'the PUR-pose of this PA-per | is to TEST | this CLAIM', 'the PUR-pose of this STU-dy | is to pro-VIDE | EV-i-dence'],
            situation: ['審查委員問：What is the point of this study?', 'The purpose of this study is to test this claim.'],
            trans: [
                ['改成 This study aims to', 'This study aims to test this claim.'],
                ['改成 We set out to', 'We set out to test this claim.']
            ],
            resps: [
                ['What is the purpose of this study?', 'The purpose of this study is to test this claim.'],
                ['Why was this chapter written?', 'The purpose of this chapter is to test this claim.']
            ],
            exps: [
                ['加上 using new data', 'The purpose of this study is to test this claim using new data.'],
                ['再加上 from two cities', 'The purpose of this study is to test this claim using new data from two cities.']
            ]
        }),
        add({
            id: 'starter-previous-studies',
            title: '文獻：Previous studies have shown that',
            topic: '回顧既有研究',
            level: 'B2',
            source: 'academic',
            corePattern: 'Previous studies have + V3 + that-clause',
            baseSentence: 'Previous studies have shown that sleep affects memory.',
            rhythm: 'PRE-vi-ous STU-dies | have SHOWN that | SLEEP | af-FECTS | ME-mo-ry'
        }, {
            subs: [
                ['suggested', 'Previous studies have suggested that sleep affects memory.'],
                ['found', 'Previous studies have found that sleep affects memory.'],
                ['reported', 'Previous studies have reported that sleep affects memory.'],
                ['argued', 'Previous studies have argued that sleep affects memory.'],
                ['failed to show', 'Previous studies have failed to show that sleep affects memory.'],
                ['stress affects health', 'Previous studies have shown that stress affects health.'],
                ['the results vary', 'Previous studies have shown that the results vary.'],
                ['this link is weak', 'Previous studies have shown that this link is weak.'],
                ['Several studies', 'Several studies have shown that sleep affects memory.'],
                ['Recent research', 'Recent research has shown that sleep affects memory.'],
                ['Earlier work', 'Earlier work has shown that sleep affects memory.'],
                ['A large body of work', 'A large body of work has shown that sleep affects memory.'],
                ['These findings', 'These findings have shown that sleep affects memory.'],
                ['Most reviews', 'Most reviews have shown that sleep affects memory.'],
                ['Little research', 'Little research has shown that sleep affects memory.']
            ],
            shadows: ['PRE-vi-ous STU-dies | have SUG-ges-ted that | SLEEP | af-FECTS | ME-mo-ry', 'RE-cent re-SEARCH | has SHOWN that | SLEEP | af-FECTS | ME-mo-ry', 'PRE-vi-ous STU-dies | have FOUND that | the re-SULTS | VA-ry'],
            situation: ['口試被問：What does the literature say?', 'Previous studies have shown that sleep affects memory.'],
            trans: [
                ['改成被動 It has been shown that', 'It has been shown that sleep affects memory.'],
                ['改成否定', 'Previous studies have not shown that sleep affects memory.']
            ],
            resps: [
                ['What have previous studies shown?', 'Previous studies have shown that sleep affects memory.'],
                ['Is this finding new?', 'No, previous studies have shown that sleep affects memory.']
            ],
            exps: [
                ['加上 in adults', 'Previous studies have shown that sleep affects memory in adults.'],
                ['再加上 over short periods', 'Previous studies have shown that sleep affects memory in adults over short periods.']
            ]
        }),
        add({
            id: 'starter-little-is-known',
            title: '文獻缺口：Little is known about',
            topic: '指出還沒被好好研究的部分',
            level: 'B2',
            source: 'academic',
            corePattern: 'Little is known about + noun',
            baseSentence: 'Little is known about the long-term effects.',
            rhythm: 'LIT-tle is KNOWN | a-bout the LONG-term | ef-FECTS'
        }, {
            subs: [
                ['this mechanism', 'Little is known about this mechanism.'],
                ['how people decide', 'Little is known about how people decide.'],
                ['the local context', 'Little is known about the local context.'],
                ['why this happens', 'Little is known about why this happens.'],
                ['its causes', 'Little is known about its causes.'],
                ['Much is known about', 'Much is known about the long-term effects.'],
                ['Less is known about', 'Less is known about the long-term effects.'],
                ['Nothing is known about', 'Nothing is known about the long-term effects.'],
                ['this group', 'Little is known about this group.'],
                ['daily use', 'Little is known about daily use.'],
                ['the side effects', 'Little is known about the side effects.'],
                ['what happens next', 'Little is known about what happens next.'],
                ['these interactions', 'Little is known about these interactions.'],
                ['the second stage', 'Little is known about the second stage.'],
                ['how the two are linked', 'Little is known about how the two are linked.']
            ],
            shadows: ['LIT-tle is KNOWN | a-bout this ME-cha-nism', 'LIT-tle is KNOWN | a-bout HOW | peo-ple de-CIDE', 'LESS is KNOWN | a-bout the LONG-term | ef-FECTS'],
            situation: ['引言最後，引出你的研究空缺。', 'Little is known about the long-term effects.'],
            trans: [
                ['改成 We still know little about', 'We still know little about the long-term effects.'],
                ['改成 Few studies have examined', 'Few studies have examined the long-term effects.']
            ],
            resps: [
                ['What is still missing in the literature?', 'Little is known about the long-term effects.'],
                ['Has this been studied in detail?', 'Little is known about this mechanism.']
            ],
            exps: [
                ['加上 in older adults', 'Little is known about the long-term effects in older adults.'],
                ['再加上 after treatment stops', 'Little is known about the long-term effects in older adults after treatment stops.']
            ]
        }),
        add({
            id: 'starter-data-collected',
            title: '方法：Data were collected',
            topic: '描述怎麼蒐集資料',
            level: 'B2',
            source: 'academic',
            corePattern: 'Data were collected + prepositional phrase',
            baseSentence: 'Data were collected from 120 students.',
            rhythm: 'DA-ta were col-LEC-ted | from ONE TWEN-ty | STU-dents'
        }, {
            subs: [
                ['through interviews', 'Data were collected through interviews.'],
                ['via an online survey', 'Data were collected via an online survey.'],
                ['over six months', 'Data were collected over six months.'],
                ['in two cities', 'Data were collected in two cities.'],
                ['between 2022 and 2024', 'Data were collected between 2022 and 2024.'],
                ['after each session', 'Data were collected after each session.'],
                ['The sample was drawn', 'The sample was drawn from 120 students.'],
                ['Participants were recruited', 'Participants were recruited from 120 students.'],
                ['Responses were recorded', 'Responses were recorded from 120 students.'],
                ['using a questionnaire', 'Data were collected using a questionnaire.'],
                ['during classroom visits', 'Data were collected during classroom visits.'],
                ['at three time points', 'Data were collected at three time points.'],
                ['by two researchers', 'Data were collected by two researchers.'],
                ['under controlled conditions', 'Data were collected under controlled conditions.'],
                ['with informed consent', 'Data were collected with informed consent.']
            ],
            shadows: ['DA-ta were col-LEC-ted | through IN-ter-views', 'DA-ta were col-LEC-ted | O-ver SIX | MONTHS', 'DA-ta were col-LEC-ted | u-sing a ques-tion-NAIRE'],
            situation: ['方法節口頭報告。', 'Data were collected from 120 students.'],
            trans: [
                ['改成主動 We collected data', 'We collected data from 120 students.'],
                ['改成現在完成', 'Data have been collected from 120 students.']
            ],
            resps: [
                ['How were the data collected?', 'Data were collected from 120 students.'],
                ['What instrument did you use?', 'Data were collected using a questionnaire.']
            ],
            exps: [
                ['加上 in 2024', 'Data were collected from 120 students in 2024.'],
                ['再加上 at a public university', 'Data were collected from 120 students in 2024 at a public university.']
            ]
        }),
        add({
            id: 'starter-results-indicate',
            title: '結果：The results indicate that',
            topic: '報告發現，語氣比 prove 保守',
            level: 'B2',
            source: 'academic',
            corePattern: 'The results indicate that + clause',
            baseSentence: 'The results indicate that the method works.',
            rhythm: 'the re-SULTS | IN-di-cate that | the ME-thod | WORKS'
        }, {
            subs: [
                ['the difference is small', 'The results indicate that the difference is small.'],
                ['both groups improved', 'The results indicate that both groups improved.'],
                ['the effect is limited', 'The results indicate that the effect is limited.'],
                ['this pattern is stable', 'The results indicate that this pattern is stable.'],
                ['The findings suggest', 'The findings suggest that the method works.'],
                ['The data show', 'The data show that the method works.'],
                ['These figures suggest', 'These figures suggest that the method works.'],
                ['the claim is too strong', 'The results indicate that the claim is too strong.'],
                ['more time is needed', 'The results indicate that more time is needed.'],
                ['the two are related', 'The results indicate that the two are related.'],
                ['students preferred this', 'The results indicate that students preferred this.'],
                ['the risk increased', 'The results indicate that the risk increased.'],
                ['no clear trend emerged', 'The results indicate that no clear trend emerged.'],
                ['the model is useful', 'The results indicate that the model is useful.'],
                ['further tests are needed', 'The results indicate that further tests are needed.']
            ],
            shadows: ['the re-SULTS | IN-di-cate that | both GROUPS | im-PROVED', 'the FIND-ings | SUG-gest that | the ME-thod | WORKS', 'the re-SULTS | IN-di-cate that | FUR-ther TESTS | are NEE-ded'],
            situation: ['結果節第一句。', 'The results indicate that the method works.'],
            trans: [
                ['改成更弱 appear to indicate', 'The results appear to indicate that the method works.'],
                ['改成更強 demonstrate', 'The results demonstrate that the method works.']
            ],
            resps: [
                ['What do the results show?', 'The results indicate that the method works.'],
                ['Did both groups change?', 'The results indicate that both groups improved.']
            ],
            exps: [
                ['加上 in this sample', 'The results indicate that the method works in this sample.'],
                ['再加上 but not for all tasks', 'The results indicate that the method works in this sample but not for all tasks.']
            ]
        }),
        add({
            id: 'starter-it-appears',
            title: '保留語氣：The results appear to + 動詞',
            topic: 'hedging，不把話說死',
            level: 'B2',
            source: 'academic',
            corePattern: 'The results appear to + verb',
            baseSentence: 'The results appear to support this claim.',
            rhythm: 'the re-SULTS | ap-PEAR to | sup-PORT | this CLAIM'
        }, {
            subs: [
                ['confirm', 'The results appear to confirm this claim.'],
                ['challenge', 'The results appear to challenge this claim.'],
                ['weaken', 'The results appear to weaken this claim.'],
                ['extend', 'The results appear to extend this claim.'],
                ['These findings', 'These findings appear to support this claim.'],
                ['This pattern', 'This pattern appears to support this claim.'],
                ['this view', 'The results appear to support this view.'],
                ['the opposite view', 'The results appear to support the opposite view.'],
                ['may support', 'The results may support this claim.'],
                ['tend to support', 'The results tend to support this claim.'],
                ['seem to support', 'The results seem to support this claim.'],
                ['It seems that', 'It seems that the results support this claim.'],
                ['It is possible that', 'It is possible that the results support this claim.'],
                ['This may suggest', 'This may suggest this claim.'],
                ['One possible reading is', 'One possible reading is that the results support this claim.']
            ],
            shadows: ['the re-SULTS | ap-PEAR to | chal-LENGE | this CLAIM', 'these FIND-ings | ap-PEAR to | sup-PORT | this CLAIM', 'it is POS-si-ble that | the re-SULTS | sup-PORT | this CLAIM'],
            situation: ['報告結論，但不想講得太滿。', 'The results appear to support this claim.'],
            trans: [
                ['改成更確定 The results show', 'The results show this claim.'],
                ['改成更弱 The results may', 'The results may support this claim.'],
                ['改成否定', 'The results do not appear to support this claim.']
            ],
            resps: [
                ['Do the results prove the claim?', 'The results appear to support this claim.'],
                ['How certain are you?', 'The results appear to support this claim.']
            ],
            exps: [
                ['加上 at least in this sample', 'The results appear to support this claim, at least in this sample.'],
                ['開頭加 Overall,', 'Overall, the results appear to support this claim, at least in this sample.']
            ]
        }),
        add({
            id: 'starter-however',
            title: '轉折：However, + 完整句子',
            topic: '承認前文後立刻轉折',
            level: 'B1',
            source: 'academic',
            corePattern: 'However, + independent clause',
            baseSentence: 'However, the sample size is small.',
            rhythm: 'how-EV-er | the SAM-ple SIZE | is SMALL'
        }, {
            subs: [
                ['the evidence is mixed', 'However, the evidence is mixed.'],
                ['this study finds the opposite', 'However, this study finds the opposite.'],
                ['the difference is not significant', 'However, the difference is not significant.'],
                ['few studies have tested this', 'However, few studies have tested this.'],
                ['the method has limits', 'However, the method has limits.'],
                ['later work disagreed', 'However, later work disagreed.'],
                ['this does not apply to all cases', 'However, this does not apply to all cases.'],
                ['more data are needed', 'However, more data are needed.'],
                ['the effect was weak', 'However, the effect was weak.'],
                ['the design cannot show cause', 'However, the design cannot show cause.'],
                ['costs remain high', 'However, costs remain high.'],
                ['the gain did not last', 'However, the gain did not last.'],
                ['participants dropped out', 'However, participants dropped out.'],
                ['the measure is imperfect', 'However, the measure is imperfect.'],
                ['other factors may matter', 'However, other factors may matter.']
            ],
            shadows: ['how-EV-er | the EV-i-dence | is MIXED', 'how-EV-er | more DA-ta | are NEE-ded', 'how-EV-er | the de-SIGN | can-NOT | show CAUSE'],
            situation: ['先講舊研究支持這個說法，再轉折。', 'However, the sample size is small.'],
            trans: [
                ['改成 But', 'But the sample size is small.'],
                ['改成 Although 合併前句', 'Although earlier work supports this, the sample size is small.'],
                ['改成 Nevertheless', 'Nevertheless, the sample size is small.']
            ],
            resps: [
                ['What is the main limitation?', 'However, the sample size is small.'],
                ['Is the evidence consistent?', 'However, the evidence is mixed.']
            ],
            exps: [
                ['加上 and hard to generalize', 'However, the sample size is small and hard to generalize.'],
                ['開頭加 These results are useful.', 'These results are useful. However, the sample size is small and hard to generalize.']
            ]
        }),
        add({
            id: 'starter-in-contrast',
            title: '對比：In contrast, + 完整句子',
            topic: '兩邊對立，不是小小轉折',
            level: 'B2',
            source: 'academic',
            corePattern: 'In contrast, + independent clause',
            baseSentence: 'In contrast, the second group improved.',
            rhythm: 'in CON-trast | the SE-cond GROUP | im-PROVED'
        }, {
            subs: [
                ['costs rose', 'In contrast, costs rose.'],
                ['demand fell', 'In contrast, demand fell.'],
                ['this study found no effect', 'In contrast, this study found no effect.'],
                ['older adults declined', 'In contrast, older adults declined.'],
                ['the control group did not change', 'In contrast, the control group did not change.'],
                ['later trials failed', 'In contrast, later trials failed.'],
                ['city residents scored higher', 'In contrast, city residents scored higher.'],
                ['the new model was slower', 'In contrast, the new model was slower.'],
                ['On the other hand, demand fell', 'On the other hand, demand fell.'],
                ['By comparison, costs rose', 'By comparison, costs rose.'],
                ['the effect disappeared', 'In contrast, the effect disappeared.'],
                ['women reported more stress', 'In contrast, women reported more stress.'],
                ['written scores stayed flat', 'In contrast, written scores stayed flat.'],
                ['the short version failed', 'In contrast, the short version failed.'],
                ['remote workers did better', 'In contrast, remote workers did better.']
            ],
            shadows: ['in CON-trast | COSTS | ROSE', 'in CON-trast | the con-TROL GROUP | did NOT | CHANGE', 'on the O-ther HAND | de-MAND | FELL'],
            situation: ['第一組進步了，現在講第二組。', 'In contrast, the second group improved.'],
            trans: [
                ['改成 However', 'However, the second group improved.'],
                ['改成 while 合併', 'The first group declined, while the second group improved.']
            ],
            resps: [
                ['What about the second group?', 'In contrast, the second group improved.'],
                ['Did both groups change the same way?', 'In contrast, the control group did not change.']
            ],
            exps: [
                ['加上 after training', 'In contrast, the second group improved after training.'],
                ['再加上 on every measure', 'In contrast, the second group improved after training on every measure.']
            ]
        }),
        add({
            id: 'starter-in-terms-of',
            title: '框架：In terms of + 名詞',
            topic: '先限定從哪個角度看',
            level: 'B1',
            source: 'academic',
            corePattern: 'In terms of + noun, clause',
            baseSentence: 'In terms of cost, this option is better.',
            rhythm: 'in TERMS of | COST | this OP-tion | is BET-ter'
        }, {
            subs: [
                ['time', 'In terms of time, this option is better.'],
                ['quality', 'In terms of quality, this option is better.'],
                ['risk', 'In terms of risk, this option is better.'],
                ['performance', 'In terms of performance, this option is better.'],
                ['accuracy', 'In terms of accuracy, this option is better.'],
                ['user experience', 'In terms of user experience, this option is better.'],
                ['long-term impact', 'In terms of long-term impact, this option is better.'],
                ['this plan is cheaper', 'In terms of cost, this plan is cheaper.'],
                ['the results are mixed', 'In terms of cost, the results are mixed.'],
                ['the data are limited', 'In terms of cost, the data are limited.'],
                ['fairness', 'In terms of fairness, this option is better.'],
                ['scale', 'In terms of scale, this option is better.'],
                ['clarity', 'In terms of clarity, this option is better.'],
                ['the evidence is weak', 'In terms of cost, the evidence is weak.'],
                ['nothing is settled', 'In terms of cost, nothing is settled.']
            ],
            shadows: ['in TERMS of | TIME | this OP-tion | is BET-ter', 'in TERMS of | user ex-PE-ri-ence | this OP-tion | is BET-ter', 'in TERMS of | LONG-term IM-pact | this OP-tion | is BET-ter'],
            situation: ['會議上比較兩個方案。', 'In terms of cost, this option is better.'],
            trans: [
                ['改成 Regarding', 'Regarding cost, this option is better.'],
                ['改成 As for', 'As for cost, this option is better.'],
                ['改成 With regard to', 'With regard to cost, this option is better.']
            ],
            resps: [
                ['Which option is cheaper?', 'In terms of cost, this option is better.'],
                ['How do they compare on quality?', 'In terms of quality, this option is better.']
            ],
            exps: [
                ['加上 in the short run', 'In terms of cost, this option is better in the short run.'],
                ['再加上 but not in quality', 'In terms of cost, this option is better in the short run, but not in quality.']
            ]
        }),
        add({
            id: 'starter-possible-explanation',
            title: '解釋：A possible explanation is that',
            topic: '討論節提出原因，但不武斷',
            level: 'B2',
            source: 'academic',
            corePattern: 'A possible explanation is that + clause',
            baseSentence: 'A possible explanation is that the sample was small.',
            rhythm: 'a POS-si-ble ex-pla-NA-tion | is that | the SAM-ple | was SMALL'
        }, {
            subs: [
                ['the task was too hard', 'A possible explanation is that the task was too hard.'],
                ['participants were tired', 'A possible explanation is that participants were tired.'],
                ['the measure was weak', 'A possible explanation is that the measure was weak.'],
                ['practice effects occurred', 'A possible explanation is that practice effects occurred.'],
                ['One explanation is', 'One explanation is that the sample was small.'],
                ['This may be because', 'This may be because the sample was small.'],
                ['This could reflect sampling error', 'This could reflect sampling error.'],
                ['people guessed', 'A possible explanation is that people guessed.'],
                ['the instructions were unclear', 'A possible explanation is that the instructions were unclear.'],
                ['the two groups were not equal', 'A possible explanation is that the two groups were not equal.'],
                ['the effect takes longer', 'A possible explanation is that the effect takes longer.'],
                ['we missed a variable', 'A possible explanation is that we missed a variable.'],
                ['the setting was unusual', 'A possible explanation is that the setting was unusual.'],
                ['motivation dropped', 'A possible explanation is that motivation dropped.'],
                ['the result is random', 'A possible explanation is that the result is random.']
            ],
            shadows: ['a POS-si-ble ex-pla-NA-tion | is that | the TASK | was too HARD', 'this MAY be be-CAUSE | the SAM-ple | was SMALL', 'a POS-si-ble ex-pla-NA-tion | is that | we MISSED | a VA-ri-a-ble'],
            situation: ['結果和預期相反，討論節第一句。', 'A possible explanation is that the sample was small.'],
            trans: [
                ['改成 This may be because', 'This may be because the sample was small.'],
                ['改成更確定 This is because', 'This is because the sample was small.']
            ],
            resps: [
                ['Why might the effect be so small?', 'A possible explanation is that the sample was small.'],
                ['Why did the second test fail?', 'A possible explanation is that the task was too hard.']
            ],
            exps: [
                ['加上 and hard to generalize', 'A possible explanation is that the sample was small and hard to generalize.'],
                ['再加上 from one school', 'A possible explanation is that the sample was small and hard to generalize from one school.']
            ]
        }),
        add({
            id: 'starter-further-research',
            title: '展望：Further research is needed to',
            topic: '結論常見收尾',
            level: 'B2',
            source: 'academic',
            corePattern: 'Further research is needed to + verb',
            baseSentence: 'Further research is needed to test this idea.',
            rhythm: 'FUR-ther re-SEARCH | is NEE-ded to | TEST | this i-DE-a'
        }, {
            subs: [
                ['confirm these findings', 'Further research is needed to confirm these findings.'],
                ['explain this pattern', 'Further research is needed to explain this pattern.'],
                ['include a larger sample', 'Further research is needed to include a larger sample.'],
                ['compare other groups', 'Further research is needed to compare other groups.'],
                ['track long-term change', 'Further research is needed to track long-term change.'],
                ['More work is needed to', 'More work is needed to test this idea.'],
                ['Future studies should', 'Future studies should test this idea.'],
                ['It remains to be seen whether this holds', 'It remains to be seen whether this holds.'],
                ['replicate this result', 'Further research is needed to replicate this result.'],
                ['rule out other causes', 'Further research is needed to rule out other causes.'],
                ['test a different measure', 'Further research is needed to test a different measure.'],
                ['examine everyday settings', 'Further research is needed to examine everyday settings.'],
                ['check whether this lasts', 'Further research is needed to check whether this lasts.'],
                ['separate these factors', 'Further research is needed to separate these factors.'],
                ['see if the effect generalizes', 'Further research is needed to see if the effect generalizes.']
            ],
            shadows: ['FUR-ther re-SEARCH | is NEE-ded to | con-FIRM | these FIND-ings', 'FU-ture STU-dies | SHOULD | TEST | this i-DE-a', 'FUR-ther re-SEARCH | is NEE-ded to | RULE OUT | O-ther CAU-ses'],
            situation: ['論文最後一段。', 'Further research is needed to test this idea.'],
            trans: [
                ['改成 Future studies should', 'Future studies should test this idea.'],
                ['改成 We still need to', 'We still need to test this idea.']
            ],
            resps: [
                ['What should come next?', 'Further research is needed to test this idea.'],
                ['Can we treat this as settled?', 'Further research is needed to confirm these findings.']
            ],
            exps: [
                ['加上 with a larger sample', 'Further research is needed to test this idea with a larger sample.'],
                ['再加上 over a longer period', 'Further research is needed to test this idea with a larger sample over a longer period.']
            ]
        }),
        add({
            id: 'starter-this-concludes',
            title: '收束：This paper concludes that',
            topic: '最後把主張收乾淨',
            level: 'B2',
            source: 'academic',
            corePattern: 'This paper concludes that + clause',
            baseSentence: 'This paper concludes that the method is useful.',
            rhythm: 'this PA-per | con-CLUDES that | the ME-thod | is USE-ful'
        }, {
            subs: [
                ['the effect is real but small', 'This paper concludes that the effect is real but small.'],
                ['the claim needs more evidence', 'This paper concludes that the claim needs more evidence.'],
                ['both factors matter', 'This paper concludes that both factors matter.'],
                ['the current account is incomplete', 'This paper concludes that the current account is incomplete.'],
                ['We conclude that', 'We conclude that the method is useful.'],
                ['Overall, we argue that', 'Overall, we argue that the method is useful.'],
                ['In short', 'In short, the method is useful.'],
                ['Taken together, these results suggest', 'Taken together, these results suggest that the method is useful.'],
                ['the benefit is limited', 'This paper concludes that the benefit is limited.'],
                ['practice still matters', 'This paper concludes that practice still matters.'],
                ['the gap remains', 'This paper concludes that the gap remains.'],
                ['a mixed design is better', 'This paper concludes that a mixed design is better.'],
                ['the policy should change', 'This paper concludes that the policy should change.'],
                ['caution is needed', 'This paper concludes that caution is needed.'],
                ['the question is still open', 'This paper concludes that the question is still open.']
            ],
            shadows: ['this PA-per | con-CLUDES that | the ef-FECT | is REAL | but SMALL', 'we con-CLUDE that | the ME-thod | is USE-ful', 'TA-ken to-GETH-er | these re-SULTS | SUG-gest that | the ME-thod | is USE-ful'],
            situation: ['口試最後問：So what is your conclusion?', 'This paper concludes that the method is useful.'],
            trans: [
                ['改成 We conclude that', 'We conclude that the method is useful.'],
                ['改成 In conclusion,', 'In conclusion, the method is useful.']
            ],
            resps: [
                ['What is your conclusion?', 'This paper concludes that the method is useful.'],
                ['Is the question settled?', 'This paper concludes that the question is still open.']
            ],
            exps: [
                ['加上 for classroom practice', 'This paper concludes that the method is useful for classroom practice.'],
                ['再加上 but still incomplete', 'This paper concludes that the method is useful for classroom practice but still incomplete.']
            ]
        }),
        add({
            id: 'starter-defined-as',
            title: '定義：X is defined as',
            topic: '先把關鍵詞釘死',
            level: 'B2',
            source: 'academic',
            corePattern: 'X is defined as + noun phrase',
            baseSentence: 'Fluency is defined as smooth, fast speech.',
            rhythm: 'FLU-en-cy | is de-FINED as | SMOOTH | FAST | SPEECH'
        }, {
            subs: [
                ['automatic speech', 'Fluency is defined as automatic speech.'],
                ['ease of production', 'Fluency is defined as ease of production.'],
                ['Accuracy', 'Accuracy is defined as error-free form.'],
                ['Transfer', 'Transfer is defined as use of old knowledge in a new task.'],
                ['Working memory', 'Working memory is defined as short-term holding of information.'],
                ['In this paper, fluency', 'In this paper, fluency is defined as smooth, fast speech.'],
                ['Here, fluency', 'Here, fluency is defined as smooth, fast speech.'],
                ['We define fluency as', 'We define fluency as smooth, fast speech.'],
                ['a stable habit', 'Fluency is defined as a stable habit.'],
                ['low hesitation', 'Fluency is defined as low hesitation.'],
                ['the ability to keep going', 'Fluency is defined as the ability to keep going.'],
                ['speech without long pauses', 'Fluency is defined as speech without long pauses.'],
                ['X can be seen as', 'Fluency can be seen as smooth, fast speech.'],
                ['X refers to', 'Fluency refers to smooth, fast speech.'],
                ['X is understood as', 'Fluency is understood as smooth, fast speech.']
            ],
            shadows: ['FLU-en-cy | is de-FINED as | a STA-ble | HAB-it', 'we de-FINE | FLU-en-cy as | SMOOTH | FAST | SPEECH', 'FLU-en-cy | re-FERS to | SMOOTH | FAST | SPEECH'],
            situation: ['方法節先定義關鍵詞。', 'Fluency is defined as smooth, fast speech.'],
            trans: [
                ['改成主動 We define X as', 'We define fluency as smooth, fast speech.'],
                ['改成 X refers to', 'Fluency refers to smooth, fast speech.']
            ],
            resps: [
                ['How do you define fluency?', 'Fluency is defined as smooth, fast speech.'],
                ['What does transfer mean here?', 'Transfer is defined as smooth, fast speech.']
            ],
            exps: [
                ['加上 in this study', 'Fluency is defined as smooth, fast speech in this study.'],
                ['再加上 rather than perfect grammar', 'Fluency is defined as smooth, fast speech in this study rather than perfect grammar.']
            ]
        }),
        add({
            id: 'starter-main-limitation',
            title: '限制：The main limitation is that',
            topic: '自己先講研究弱點',
            level: 'B2',
            source: 'academic',
            corePattern: 'The main limitation is that + clause',
            baseSentence: 'The main limitation is that the sample is small.',
            rhythm: 'the MAIN li-mi-TA-tion | is that | the SAM-ple | is SMALL'
        }, {
            subs: [
                ['the design is correlational', 'The main limitation is that the design is correlational.'],
                ['we used self-reports', 'The main limitation is that we used self-reports.'],
                ['the study was short', 'The main limitation is that the study was short.'],
                ['only one school was included', 'The main limitation is that only one school was included.'],
                ['A further limitation is', 'A further limitation is that the sample is small.'],
                ['This study is limited by its size', 'This study is limited by its size.'],
                ['These findings should be read with caution', 'These findings should be read with caution because the sample is small.'],
                ['we cannot show cause', 'The main limitation is that we cannot show cause.'],
                ['the measure is new', 'The main limitation is that the measure is new.'],
                ['attrition was high', 'The main limitation is that attrition was high.'],
                ['the setting was artificial', 'The main limitation is that the setting was artificial.'],
                ['the groups were unequal', 'The main limitation is that the groups were unequal.'],
                ['English proficiency varied', 'The main limitation is that English proficiency varied.'],
                ['we lacked a control group', 'The main limitation is that we lacked a control group.'],
                ['the coding was not blind', 'The main limitation is that the coding was not blind.']
            ],
            shadows: ['the MAIN li-mi-TA-tion | is that | the de-SIGN | is cor-re-LA-tion-al', 'the MAIN li-mi-TA-tion | is that | we can-NOT | show CAUSE', 'the MAIN li-mi-TA-tion | is that | we LACKED | a con-TROL | GROUP'],
            situation: ['口試被問 limitations。', 'The main limitation is that the sample is small.'],
            trans: [
                ['改成 This study is limited by', 'This study is limited by the small sample.'],
                ['改成 These findings should be treated with caution', 'These findings should be treated with caution.']
            ],
            resps: [
                ['What is the main limitation?', 'The main limitation is that the sample is small.'],
                ['Can you show cause?', 'The main limitation is that we cannot show cause.']
            ],
            exps: [
                ['加上 and hard to generalize', 'The main limitation is that the sample is small and hard to generalize.'],
                ['再加上 beyond this school', 'The main limitation is that the sample is small and hard to generalize beyond this school.']
            ]
        }),
        add({
            id: 'starter-compared-with',
            title: '比較文獻：Compared with previous work',
            topic: '把自己的研究和別人對上',
            level: 'B2',
            source: 'academic',
            corePattern: 'Compared with previous work, clause',
            baseSentence: 'Compared with previous work, this study is larger.',
            rhythm: 'com-PARED with | PRE-vi-ous WORK | this STU-dy | is LAR-ger'
        }, {
            subs: [
                ['this sample is older', 'Compared with previous work, this sample is older.'],
                ['the effect is weaker', 'Compared with previous work, the effect is weaker.'],
                ['our measure is simpler', 'Compared with previous work, our measure is simpler.'],
                ['the setting is more natural', 'Compared with previous work, the setting is more natural.'],
                ['Unlike earlier studies', 'Unlike earlier studies, this study is larger.'],
                ['In line with earlier work', 'In line with earlier work, this study is larger.'],
                ['Consistent with Smith', 'Consistent with Smith, this study is larger.'],
                ['this design is stronger', 'Compared with previous work, this design is stronger.'],
                ['we include a control group', 'Compared with previous work, we include a control group.'],
                ['the time span is longer', 'Compared with previous work, the time span is longer.'],
                ['the language is different', 'Compared with previous work, the language is different.'],
                ['fewer items were used', 'Compared with previous work, fewer items were used.'],
                ['the gain appeared sooner', 'Compared with previous work, the gain appeared sooner.'],
                ['our conclusion is more cautious', 'Compared with previous work, our conclusion is more cautious.'],
                ['the conflict remains', 'Compared with previous work, the conflict remains.']
            ],
            shadows: ['com-PARED with | PRE-vi-ous WORK | the ef-FECT | is WEAK-er', 'un-LIKE EAR-li-er STU-dies | this STU-dy | is LAR-ger', 'in LINE with | EAR-li-er WORK | this STU-dy | is LAR-ger'],
            situation: ['討論節對文獻。', 'Compared with previous work, this study is larger.'],
            trans: [
                ['改成 Unlike earlier studies', 'Unlike earlier studies, this study is larger.'],
                ['改成 In line with earlier work', 'In line with earlier work, this study is larger.']
            ],
            resps: [
                ['How does this study differ?', 'Compared with previous work, this study is larger.'],
                ['Is your finding consistent?', 'In line with earlier work, this study is larger.']
            ],
            exps: [
                ['加上 and more diverse', 'Compared with previous work, this study is larger and more diverse.'],
                ['再加上 in two countries', 'Compared with previous work, this study is larger and more diverse in two countries.']
            ]
        }),
        add({
            id: 'starter-raises-question',
            title: '提問：This raises the question of',
            topic: '從結果推出下一個問題',
            level: 'B2',
            source: 'academic',
            corePattern: 'This raises the question of + noun/wh-clause',
            baseSentence: 'This raises the question of why the effect disappeared.',
            rhythm: 'this RAI-ses the QUES-tion of | WHY | the ef-FECT | dis-ap-PEARED'
        }, {
            subs: [
                ['how long the gain lasts', 'This raises the question of how long the gain lasts.'],
                ['who benefits most', 'This raises the question of who benefits most.'],
                ['whether the result generalizes', 'This raises the question of whether the result generalizes.'],
                ['what counts as success', 'This raises the question of what counts as success.'],
                ['This leads to a further issue', 'This leads to a further issue of why the effect disappeared.'],
                ['An open question is', 'An open question is why the effect disappeared.'],
                ['It is unclear', 'It is unclear why the effect disappeared.'],
                ['the role of practice', 'This raises the question of the role of practice.'],
                ['the best measure', 'This raises the question of the best measure.'],
                ['next steps', 'This raises the question of next steps.'],
                ['how teachers should respond', 'This raises the question of how teachers should respond.'],
                ['whether time on task is enough', 'This raises the question of whether time on task is enough.'],
                ['the cost of this approach', 'This raises the question of the cost of this approach.'],
                ['what should be taught first', 'This raises the question of what should be taught first.'],
                ['why groups differed', 'This raises the question of why groups differed.']
            ],
            shadows: ['this RAI-ses the QUES-tion of | HOW LONG | the GAIN | LASTS', 'an O-pen QUES-tion is | WHY | the ef-FECT | dis-ap-PEARED', 'this RAI-ses the QUES-tion of | WHO | BEN-e-fits | MOST'],
            situation: ['結果出乎意料，討論節往下推。', 'This raises the question of why the effect disappeared.'],
            trans: [
                ['改成 An open question is', 'An open question is why the effect disappeared.'],
                ['改成 It is unclear why', 'It is unclear why the effect disappeared.']
            ],
            resps: [
                ['What does this finding imply?', 'This raises the question of why the effect disappeared.'],
                ['What should we ask next?', 'This raises the question of how long the gain lasts.']
            ],
            exps: [
                ['加上 after two weeks', 'This raises the question of why the effect disappeared after two weeks.'],
                ['再加上 in classroom settings', 'This raises the question of why the effect disappeared after two weeks in classroom settings.']
            ]
        }),
        add({
            id: 'starter-according-to',
            title: '引述：According to + 來源',
            topic: '把主張掛在文獻上',
            level: 'B1',
            source: 'academic',
            corePattern: 'According to X, clause',
            baseSentence: 'According to Smith, practice must be timed.',
            rhythm: 'ac-CORD-ing to SMITH | PRAC-tice | must be TIMED'
        }, {
            subs: [
                ['earlier work', 'According to earlier work, practice must be timed.'],
                ['this view', 'According to this view, practice must be timed.'],
                ['the official report', 'According to the official report, practice must be timed.'],
                ['recent reviews', 'According to recent reviews, practice must be timed.'],
                ['one common account', 'According to one common account, practice must be timed.'],
                ['the results were mixed', 'According to Smith, the results were mixed.'],
                ['the sample was biased', 'According to Smith, the sample was biased.'],
                ['the effect is small', 'According to Smith, the effect is small.'],
                ['As Smith notes', 'As Smith notes, practice must be timed.'],
                ['Smith argues that', 'Smith argues that practice must be timed.'],
                ['Smith found that', 'Smith found that practice must be timed.'],
                ['For Smith', 'For Smith, practice must be timed.'],
                ['the gap is still wide', 'According to Smith, the gap is still wide.'],
                ['context changes everything', 'According to Smith, context changes everything.'],
                ['this method is incomplete', 'According to Smith, this method is incomplete.']
            ],
            shadows: ['ac-CORD-ing to SMITH | the re-SULTS | were MIXED', 'SMITH AR-gues that | PRAC-tice | must be TIMED', 'as SMITH NOTES | PRAC-tice | must be TIMED'],
            situation: ['文獻回顧裡轉述別人的主張。', 'According to Smith, practice must be timed.'],
            trans: [
                ['改成 Smith argues that', 'Smith argues that practice must be timed.'],
                ['改成 As Smith notes', 'As Smith notes, practice must be timed.']
            ],
            resps: [
                ['What does Smith say?', 'According to Smith, practice must be timed.'],
                ['How does the report describe the results?', 'According to the official report, the results were mixed.']
            ],
            exps: [
                ['加上 in adult learners', 'According to Smith, practice must be timed in adult learners.'],
                ['再加上 if fluency is the goal', 'According to Smith, practice must be timed in adult learners if fluency is the goal.']
            ]
        })
    ];

    global.FSI_LIBRARY_VERSION = 3;
    global.FSI_STARTER_SETS = FSI_STARTER_SETS;
    global.fsiPackSet = fsiPackSet;
})(typeof window !== 'undefined' ? window : globalThis);
