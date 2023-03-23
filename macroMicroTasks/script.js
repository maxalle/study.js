// WEB API - задачи розміщуються в фоновому режимі
// callback queue - черга викликів
// callstack - текущий виклик

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

queueMicrotask(() => console.log('dub'));

Promise.resolve()
    .then(() => console.log('promise_2'));

console.log('code');

// then/catch/finally та оператор await - які створюютсья завдяки промісам відносяться до мікрозадач(Мікротаск)
// setTimeout являєтсья макротаском(макрозадача)
// Коли був виконаний виклик макротаску, всі мікро таски, які були в черзі - виконуються. лише після цього наступний макротаск виконається

// Схема
// () => {} - macrotask
// microtask: then/catch/finally/await
// render webpage
// () => {} - macrotask
// microtask: then/catch/finally/await
// render webpage
// () => { - macrotask}

// queueMicrotask() - дозволяє вставити код в чергу мікротасків, на випадок, якщо макротаск необхідно виконати першим за певні мікротаскі
// відслідковування миші в браузері - це макротаск

// Bсе микрозадачи завершаются до обработки каких-либо событий или рендеринга, или перехода к другой макрозадаче