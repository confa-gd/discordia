const { Discord } = require("discord.js");

const wordlist = {
  "nounMale" : [
    "Абалдуйаборт",
    "Аглоёб",
    "Алигофрен",
    "Алк",
    "Алкаш",
    "Алкоголик",
    "Алконафт",
    "Аналанонюга",
    "Анус",
    "Апёздал",
    "Архиепиздроп",
    "Архипиздрит",
    "Бананоёб",
    "Бздёх",
    "Бздун",
    "Бздунишка",
    "Бздушник",
    "Бздюх",
    "Блевун",
    "Блохоёб",
    "Блядогон",
    "Блядоход",
    "Блядун",
    "Вонючка",
    "Вротберун",
    "Выблювок",
    "Выблюдок",
    "Выблядок",
    "Выблядыш",
    "Выебок",
    "Выебон",
    "Выебыш",
    "Выёбыш",
    "Выпездыш",
    "Выпердок",
    "Выпердос",
    "Выпердыш",
    "Выпиздок",
    "Выпиздыш",
    "Высрак",
    "Гавнюк",
    "Говновоз",
    "Говнодав",
    "Говноёб",
    "Говноед",
    "Говномёт",
    "Говносос",
    "Говнотряс",
    "Говнюк",
    "Говняк",
    "Головожоп",
    "Гом",
    "Гомик",
    "Гомос",
    "Гомосек",
    "Гондон",
    "Гондоша",
    "Двужопник",
    "Долбаёб",
    "Долбоёб",
    "Долбожоп",
    "Долбошлёп",
    "Дрочила",
    "Дрочильник",
    "Дрочильщик",
    "Дрочник",
    "Дрочун",
    "Дрочушок",
    "Дуплоёб",
    "Ебака",
    "Ебаквак",
    "Ебальник",
    "Ебанат",
    "Ебанарот",
    "Ебантроп",
    "Ебанько",
    "Ебатель",
    "Ебельдос",
    "Еблан",
    "Ебламуд",
    "Еблобан",
    "Еблойд",
    "Еблоносик",
    "Еблотряс",
    "Еблун",
    "Ебоквак",
    "Ебонат",
    "Ебонатик",
    "Ебосос",
    "Ебун",
    "Елдун",
    "Ёбарь",
    "Ёбырь",
    "Жопник",
    "Жоподёр",
    "Жопоёб",
    "Жополиз",
    "Жопосос",
    "Жопотряс",
    "Жопочник",
    "Заблядыш",
    "Задрот",
    "Задротник",
    "Задрочник",
    "Заебанец",
    "Заёбыш",
    "Залупец",
    "Залупник",
    "Залупоглаз",
    "Залупон",
    "Залупосос",
    "Запёрдыш",
    "Запиздок",
    "Засранец",
    "Зассанец",
    "Защекан",
    "Защеканец",
    "Изъёбок",
    "Калоед",
    "Калоёб",
    "Калыч",
    "Козлоёб",
    "Конеёб",
    "Кривохуй",
    "Куроёб",
    "Лошок",
    "Мамоёб",
    "Мандаёб",
    "Мандапроёб",
    "Мандёж",
    "Мандозавр",
    "Мандюк",
    "Маньяк",
    "Микробоёб",
    "Микрочлен",
    "Миньетчик",
    "Мозгоебатель",
    "Мозгоёб",
    "Мудак",
    "Мударец",
    "Мудвин",
    "Мудила",
    "Мудлан",
    "Мудняк",
    "Мудоёб",
    "Мудозвон",
    "Мудон",
    "Мудотряс",
    "Мудофер",
    "Мудофил",
    "Мудошлёп",
    "Наёбок",
    "Недоёбок",
    "Недоёбыш",
    "Некрозоогомопедофил",
    "Некрофил",
    "Нигер",
    "Нигройд",
    "Ноздреёб",
    "Обмудок",
    "Обосральник",
    "Обосранец",
    "Обосранок",
    "Обсос",
    "Обсосок",
    "Обтрах",
    "Объёбыш",
    "Овцеёб",
    "Онанист",
    "Опёздыш",
    "Ослоёб",
    "Отпёздал",
    "Отсос",
    "Охерок",
    "Охуелок",
    "Охуярок",
    "Очкист",
    "Очкодрал",
    "Очколиз",
    "Педераст",
    "Педик",
    "Педофил",
    "Педрила",
    "Педрильник",
    "Пердун",
    "Пердюк",
    "Пёздырь",
    "Пидармот",
    "Пидераст",
    "Пидор",
    "Пидоразд",
    "Пидорёнок",
    "Пидорёныш",
    "Пидормот",
    "Пидорок",
    "Пидорос",
    "Пидорюга",
    "Пидр",
    "Пидрильник",
    "Пиздабол",
    "Пиздадуй",
    "Пиздаёб",
    "Пиздачёс",
    "Пиздец",
    "Пиздёныш",
    "Пиздильник",
    "Пиздобол",
    "Пиздобрат",
    "Пиздовонючник",
    "Пиздоголик",
    "Пиздогрыз",
    "Пиздодуй",
    "Пиздоёб",
    "Пиздозвон",
    "Пиздолиз",
    "Пиздопроёбчик",
    "Пиздорванец",
    "Пиздос",
    "Пиздосос",
    "Пиздостаратель",
    "Пиздотряс",
    "Пиздочёс",
    "Пиздрик",
    "Пиздун",
    "Пиздюк",
    "Пиздючок",
    "Пиздюшонок",
    "Пиздятник",
    "Пиндос",
    "Подпёздыш",
    "Подсос",
    "Поебон",
    "Поёбыш",
    "Полупидорок",
    "Потрах",
    "Похуист",
    "Припиздень",
    "Припиздок",
    "Припиздук",
    "Проблядун",
    "Проёбок",
    "Пропиздон",
    "Разъебай",
    "Распиздяй",
    "Роспизд",
    "Самотык",
    "Свиноёб",
    "Сикулёк",
    "Сифак",
    "Сосун",
    "Сосунец",
    "Сосунишка",
    "Спермак",
    "Сперматозавр",
    "Спермач",
    "Спермоглот",
    "Спермодонор",
    "Спермоед",
    "Спермофил",
    "Спермохлёб",
    "Спермер",
    "Спидоносец",
    "Срач",
    "Сральник",
    "Сруль",
    "Срульник",
    "Срун",
    "Ссыкун",
    "Сучара",
    "Сучёк",
    "Сучёнок",
    "Сучёныш",
    "Сучок",
    "Суходроч",
    "Ублюдок",
    "Ублюдочек",
    "Ублюдыш",
    "Уебан",
    "Уёбыш",
    "Уёбок",
    "Упиздок",
    "Упиздыш",
    "Ухоёб",
    "Факохерус",
    "Хер",
    "Хероман",
    "Хохол",
    "Хуеглот",
    "Хуеплёт",
    "Хуесос",
    "Хуеплёт",
    "Хуетряс",
    "Хуец",
    "Хуёгурт",
    "Хуёк",
    "Хуёмник",
    "Хуина",
    "Хуй",
    "Хуйник",
    "Целкодав",
    "Целочник",
    "Чебурек",
    "Членовоз",
    "Членоглот",
    "Членолиз",
    "Членоног",
    "Членосос",
    "Членс",
    "Чмошник",
    "Чмурёк",
    "Чмурёныш",
    "Чмырёнышь",
    "Чмырь",
    "Чурек",
    "Чуркестанец",
    "Чухан",
    "Чучмек",
    "Чушок",
    "Чушкан",
    "Чушкарь",
    "Энурезник",
    "Эротоман",
    "Экскремент",
    "Яйцеглот",
    "Яйцелиз",
    "Ялдак",
    "Ялдометр",
  ],
  "nounFemale" : [
    "Аналка",
    "Анализка",
    "Аналолизка",
    "Анархистка",
    "Анонюга",
    "Архиепиздорша",
    "Архимандритка",
    "Архипиздритка",
    "Асенизаторша",
    "Бананоёбка",
    "Бздунша",
    "Бздунишка",
    "Бздуха",
    "Бздушка",
    "Бздушница",
    "Бздюха",
    "Бичёвка",
    "Бишка",
    "Блевотина",
    "Блевотница",
    "Блохоёбка",
    "Бля",
    "Блядва",
    "Блядиада",
    "Блядина",
    "Блядища",
    "Блядовина",
    "Блядуха",
    "Блядушка",
    "Блядь",
    "Блядюга",
    "Блять",
    "Бляха",
    "Боброёбка",
    "Быдлятина",
    "Вазелинщица",
    "Вафлёрша",
    "Вротберушка",
    "Выдрочка",
    "Выдрочня",
    "Выпердышка",
    "Выпиздка",
    "Вытрахница",
    "Гандошка",
    "Гандоша",
    "Гнида",
    "Говновозка",
    "Говнодавка",
    "Говноёбка",
    "Говноедка",
    "Говнососка",
    "Говнючка",
    "Говнятина",
    "Говнячка",
    "Годзила",
    "Головопиздка",
    "Гондонша",
    "Греблядь",
    "Дерьмоедка",
    "Долбоблядь",
    "Долбоёбина",
    "Долбоёбка",
    "Долбошлёпка",
    "Дриста",
    "Дристня",
    "Дристунша",
    "Дрочилка",
    "Дрочня",
    "Дуплоёбка",
    "Дядяёбка",
    "Ебака",
    "Ебалка",
    "Ебанаротка",
    "Ебанашка",
    "Ебанка",
    "Ебантропка",
    "Ебательница",
    "Ебашка",
    "Ебланка",
    "Еблиха",
    "Ебложопа",
    "Еблососина",
    "Еблососка",
    "Еблуниха",
    "Еблуша",
    "Еблушка",
    "Ебонатка",
    "Еботня",
    "Ебунша",
    "Ебучка",
    "Ебушка",
    "Елда",
    "Ёба",
    "Ёбарьша",
    "Ёбушка",
    "Жопа",
    "Жопень",
    "Жополизка",
    "Жопотряска",
    "Жопница",
    "Заглотница",
    "Заглотка",
    "Задрота",
    "Задротка",
    "Задрочка",
    "Задрочница",
    "Заёба",
    "Заёбка",
    "Залупа",
    "Залупень",
    "Залупенька",
    "Залупня",
    "Залупососка",
    "Засеря",
    "Засранка",
    "Зассыха",
    "Затраха",
    "Злоебучка",
    "Злоёбка",
    "Калоёбка",
    "Козлоёбка",
    "Конеёбка",
    "Кривохуйша",
    "Курва",
    "Куроёбка",
    "Лизунша",
    "Лимита",
    "Лярва",
    "Манда",
    "Мандавоха",
    "Мандавошина",
    "Мандавошка",
    "Мандавша",
    "Мандаёбка",
    "Мандачня",
    "Мандовошка",
    "Миньетчица",
    "Мозгоебательница",
    "Мозгоёбка",
    "Мокрощёлка",
    "Мудачка",
    "Мудила",
    "Мудланиха",
    "Мудозвонка",
    "Мудониха",
    "Мудофилка",
    "Мудошлёпка",
    "Мудянка",
    "Мудяшка",
    "Некрозоогомопедофил",
    "Некрофилка",
    "Обдрочка",
    "Обдрочница",
    "Обосранка",
    "Объебошница",
    "Овцеёбка",
    "Онанистка",
    "Ослоёбка",
    "Отсоска",
    "Отсосня",
    "Охуелка",
    "Очкодралка",
    "Очколизка",
    "Падла",
    "Падлюга",
    "Папоёбка",
    "Параша",
    "Парашница",
    "Педофилка",
    "Педриломученница",
    "Пелотка",
    "Перда",
    "Пердуниха",
    "Пердунья",
    "Пердуха",
    "Пердь",
    "Переблядка",
    "Пёзда",
    "Пидараска",
    "Пидарасня",
    "Пидармотка",
    "Пидовка",
    "Пидорасина",
    "Пидорка",
    "Пидормотка",
    "Пидорюга",
    "Пидрильница",
    "Пизда",
    "Пиздачёска",
    "Пиздасоска",
    "Пиздень",
    "Пиздёнка",
    "Пиздоблошка",
    "Пиздоболка",
    "Пиздозвонка",
    "Пиздолизка",
    "Пиздопроёбина",
    "Пиздопроушина",
    "Пиздорванка",
    "Пиздорвань",
    "Пиздососина",
    "Пиздососка",
    "Пиздотряска",
    "Пиздочёска",
    "Пиздулина",
    "Пиздунка",
    "Пиздунша",
    "Пиздюлина",
    "Пиздятина",
    "Пиздятинка",
    "Писька",
    "Писюлька",
    "Пися",
    "Поебанка",
    "Поебень",
    "Поебня",
    "Поебота",
    "Поеботка",
    "Поебуха",
    "Поебушка",
    "Потраха",
    "Потрахушка",
    "Похуистка",
    "Припиздень",
    "Проблядовка",
    "Проблядуха",
    "Проблядушка",
    "Проблядь",
    "Проебанка",
    "Проебашка",
    "Проёбка",
    "Пропиздонша",
    "Прошмандовка",
    "Разъебайша",
    "Разъёба",
    "Распиздюга",
    "Распиздяйка",
    "Свиноёбка",
    "Сиська",
    "Сифа",
    "Сифачка",
    "Сосалка",
    "Соска",
    "Спермоглотка",
    "Спермодонорша",
    "Спермоедка",
    "Спермохлёбка",
    "Срака",
    "Срань",
    "Ссака",
    "Ссыкунишка",
    "Ссыкунша",
    "Страхоёбина",
    "Страхуила",
    "Сука",
    "Сучара",
    "Сучарина",
    "Сучина",
    "Сучиха",
    "Сучка",
    "Суходротка",
    "Суходрочка",
    "Сцука",
    "Сцуканах",
    "Трипиздюлина",
    "Уёба",
    "Уёбка",
    "Херовин",
    "Хероманка",
    "Хуеглазка",
    "Хуеглотка",
    "Хуеплётка",
    "Хуесоска",
    "Хуета",
    "Хуетёрка",
    "Хуёвина",
    "Хуила",
    "Хуина",
    "Хуйница",
    "Хуйнюшка",
    "Хуйня",
    "Хуяка",
    "Хуятина",
    "Хуячка",
    "Целкодавка",
    "Целочка",
    "Целочница",
    "Чувиха",
    "Чувырла",
    "Чурка",
    "Чуркестанка",
    "Чушкарка",
    "Шалава",
    "Яйцеглистка",
    "Яйцеглотка",
    "Яйцелизка",
    "Ялда",
    "Ялдачка",
  ],
  "adjectiveMale" : [
    "Безблядский",
    "Безмудый",
    "Бздливый",
    "Бзднувший",
    "Бздящий",
    "Блевотный",
    "Блюющий",
    "Блядливый",
    "Блядный",
    "Блядовитый",
    "Блядожопый",
    "Блядомордый",
    "Блядский",
    "Выдристанный",
    "Выдроченный",
    "Выебанный",
    "Выёбистый",
    "Высраный",
    "Выссаный",
    "Вытраханный",
    "Втрихуяблядский",
    "Вытруханный",
    "Гавёный",
    "Гниломудый",
    "Говённый",
    "Говнистый",
    "Говнявый",
    "Говняный",
    "Голожопый",
    "Голохуий",
    "Грёбаный",
    "Грёбанный",
    "Долбоёбский",
    "Долбоёбый",
    "Дристливый",
    "Дрочащий",
    "Дрочильный",
    "Дрочистый",
    "Дрочканутый",
    "Дрочливый",
    "Ебанутый",
    "Ебаный",
    "Ебический",
    "Ебливый",
    "Ебучий",
    "Ёбаный",
    "Ёбкий",
    "Ёбнутый",
    "Жопоёбанный",
    "Жополюбивый",
    "Жопорезанный",
    "Задроченный",
    "Заебательский",
    "Заебцовый",
    "Заёбанный",
    "Заёбистый",
    "Заёбский",
    "Залупистый",
    "Залупоглазый",
    "Залупский",
    "Замудоханный",
    "Засранный",
    "Зассанный",
    "Злоебучий",
    "Козлоёбый",
    "Конеёбистый",
    "Конеёбский",
    "Мандистый",
    "Мандячий",
    "Мудачный",
    "Мудильный",
    "Мудистый",
    "Муднявый",
    "Мудоблядский",
    "Мудоёбский",
    "Мудяшный",
    "Наёбанный",
    "Нахуяченный",
    "Невъебенный",
    "Недоёбанный",
    "Неёбаный",
    "Обдолбавшийся",
    "Обдолбанный",
    "Обдристанный",
    "Обдроченный",
    "Обдрочившийся",
    "Облямудевший",
    "Обосравшийся",
    "Обосранный",
    "Обоссанный",
    "Обтраханный",
    "Обтруханный",
    "Опизденительный",
    "Опизденный",
    "Опизденевший",
    "Опизденелый",
    "Опиздошенный",
    "Ослоёбый",
    "Отдроченный",
    "Отпизженный",
    "Отпомидоренный",
    "Отраханный",
    "Отсосаный",
    "Отсосный",
    "Оттраханный",
    "Отхуяченный",
    "Отъёбанный",
    "Охуевающий",
    "Охуевший",
    "Охуенный",
    "Охуительный",
    "Педрильный",
    "Пердёжный",
    "Пердящий",
    "Пидоразный",
    "Пидорковатый",
    "Пидрильный",
    "Пизданутый",
    "Пизданувшийся",
    "Пиздатый",
    "Пиздёжный",
    "Пиздобольный",
    "Пиздоватый",
    "Пиздоголовый",
    "Пиздожопый",
    "Пиздоротный",
    "Пиздорылый",
    "Пиздоский",
    "Пиндосcкий",
    "Подсосный",
    "Подъёбанный",
    "Поёбанный",
    "Полножопый",
    "Пососанный",
    "Посранный",
    "Поссанный",
    "Потраханный",
    "Похуистический",
    "Приебанный",
    "Припёзданный",
    "Припизднутый",
    "Припизженный",
    "Промудоблядский",
    "Протраханный",
    "Раздолбанный",
    "Раздроченный",
    "Разосранный",
    "Разхуяренный",
    "Разъёбанный",
    "Семижопый",
    "Сифозный",
    "Скотозалупогнойный",
    "Хуев",
    "Хуеватый",
    "Хуёвый",
    "Хуякнувшийся",
    "Хуячий",
    "Черножопый",
    "Чернозадый",
    "Черномазый",
    "Членоглотский",
    "Членоголовый",
    "Членососый",
    "Чуркестанский",
    "Чуркский",
  ],
  "adjectiveFemale" : [
    "Безблядская",
    "Безмудая",
    "Бздливая",
    "Бзднувшая",
    "Бздящая",
    "Блевотная",
    "Блюющая",
    "Блядливая",
    "Блядная",
    "Блядовитая",
    "Блядожопая",
    "Блядомордая",
    "Блядская",
    "Выдристанная",
    "Выдроченная",
    "Выебанная",
    "Выёбистая",
    "Высраная",
    "Выссаная",
    "Вытраханная",
    "Втрихуяблядская",
    "Вытруханная",
    "Гавёная",
    "Гниломудая",
    "Говённая",
    "Говнистая",
    "Говнявая",
    "Говняная",
    "Голожопая",
    "Голохуяя",
    "Грёбаная",
    "Грёбанная",
    "Долбоёбская",
    "Долбоёбая",
    "Дристливая",
    "Дрочащая",
    "Дрочильная",
    "Дрочистая",
    "Дрочканутая",
    "Дрочливая",
    "Ебанутая",
    "Ебаная",
    "Ебическая",
    "Ебливая",
    "Ебучая",
    "Ёбаная",
    "Ёбкая",
    "Ёбнутая",
    "Жопоёбанная",
    "Жополюбивая",
    "Жопорезанная",
    "Задроченная",
    "Заебательская",
    "Заебцовая",
    "Заёбанная",
    "Заёбистая",
    "Заёбская",
    "Залупистая",
    "Залупоглазая",
    "Залупская",
    "Замудоханная",
    "Засранная",
    "Зассанная",
    "Злоебучая",
    "Козлоёбая",
    "Конеёбистая",
    "Конеёбская",
    "Мандистая",
    "Мандячая",
    "Мудачная",
    "Мудильная",
    "Мудистая",
    "Муднявая",
    "Мудоблядская",
    "Мудоёбская",
    "Мудяшная",
    "Наёбанная",
    "Нахуяченная",
    "Невъебенная",
    "Недоёбанная",
    "Неёбаная",
    "Обдолбавшаяся",
    "Обдолбанная",
    "Обдристанная",
    "Обдроченная",
    "Обдрочившаяся",
    "Облямудевшая",
    "Обосравшаяся",
    "Обосранная",
    "Обоссанная",
    "Обтраханная",
    "Обтруханная",
    "Опизденительная",
    "Опизденная",
    "Опизденевшая",
    "Опизденелая",
    "Опиздошенная",
    "Ослоёбая",
    "Отдроченная",
    "Отпизженная",
    "Отпомидоренная",
    "Отраханная",
    "Отсосаная",
    "Отсосная",
    "Оттраханная",
    "Отхуяченная",
    "Отъёбанная",
    "Охуевающая",
    "Охуевшая",
    "Охуенная",
    "Охуительная",
    "Педрильная",
    "Пердёжная",
    "Пердящая",
    "Пидоразная",
    "Пидорковатая",
    "Пидрильная",
    "Пизданутая",
    "Пизданувшаяся",
    "Пиздатая",
    "Пиздёжная",
    "Пиздобольная",
    "Пиздоватая",
    "Пиздоголовая",
    "Пиздожопая",
    "Пиздоротная",
    "Пиздорылая",
    "Пиздоская",
    "Пиндосcкая",
    "Подсосная",
    "Подъёбанная",
    "Поёбанная",
    "Полножопая",
    "Пососанная",
    "Посранная",
    "Поссанная",
    "Потраханная",
    "Похуистическая",
    "Приебанная",
    "Припёзданная",
    "Припизднутая",
    "Припизженная",
    "Промудоблядская",
    "Протраханная",
    "Раздолбанная",
    "Раздроченная",
    "Разосранная",
    "Разхуяренная",
    "Разъёбанная",
    "Семижопая",
    "Сифозная",
    "Скотозалупогнойная",
    "Хуая",
    "Хуеватая",
    "Хуёвая",
    "Хуякнувшаяся",
    "Хуячая",
    "Черножопая",
    "Чернозадая",
    "Черномазая",
    "Членоглотская",
    "Членоголовая",
    "Членососая",
    "Чуркестанская",
    "Чуркская",
  ],
};

function generateNickname(gender) {
  let newName = '';

  // Male name random selection
  if (gender != "female") {
    newName = wordlist.adjectiveMale[Math.floor(Math.random()*wordlist.adjectiveMale.length)] + ' ' + wordlist.nounMale[Math.floor(Math.random()*wordlist.nounMale.length)];
  } 
  // Female name random selection
  else {
    newName = wordlist.adjectiveFemale[Math.floor(Math.random()*wordlist.adjectiveFemale.length)] + ' ' + wordlist.nounFemale[Math.floor(Math.random()*wordlist.nounFemale.length)];
  }

  return (`your name is **${newName}**`);
  // return (`your name is **${newName}**\n\nHere, use it:\n\`/nick ${newName}\``);
}

module.exports = {
  name: 'saymyname',
  aliases: ['nickname', 'nick'],
  description: "What's in a name?",
  usage: '[gender] female is optional :3',
  execute(message, args) {
    message.channel.send(
      'https://media.discordapp.net/attachments/446036511931236352/976648912926547988/saymyname.gif'
    )
    .then(() => {
      if(args != "female") {
        message.reply(`${generateNickname()}`);
      } else {
        message.reply(`${generateNickname("female")}`);
      }
    });
  },
}