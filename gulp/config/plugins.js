import replace from "gulp-replace"; // поиск и замена
import plumber from "gulp-plumber"; // обработка ошибк
import notify from "gulp-notify" // сообщения(подсказки)
import browsersync from 'browser-sync' // local server
import newer from 'gulp-newer'; // проверка обновления
import ifPlugin from 'gulp-if' // условное ветвление

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}