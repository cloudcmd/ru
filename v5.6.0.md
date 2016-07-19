---
layout: default
lang:
 - name: English
   link: //cloudcmd.io
   translation: на Английском
 
 - name: Ukrainian
   link: //ua.cloudcmd.io
   translation: на Украинском
 
 - name: Russian
   link: //ru.cloudcmd.io
   translation: на Русском

scripts:
 - https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js
 - https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js
 - https://files.cloudcmd.io/js/view.js

styles:
 - https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css

hideDownloadButtons: true
---

# Cloud Commander 5.6.0

### [Главная][MainURL] [Блог][BlogURL] Демо(![Heroku][Heroku_LIVE_IMG] [Heroku][HerokuURL])

[MainURL]:                  http://cloudcmd.io "Главная"
[BlogURL]:                  http://blog.cloudcmd.io "Блог"
[NPM_INFO_IMG]:             https://camo.githubusercontent.com/254a020afe689842501ef5a79c04ba909f9b29d2/68747470733a2f2f6e6f6465692e636f2f6e706d2f636c6f7564636d642e706e673f646f776e6c6f6164733d7472756526267374617273
[HerokuURL]:                http://cloudcmd.herokuapp.com/
[HEROKU_LIVE_IMG]:          https://status-io.cloudcmd.io/host/cloudcmd.herokuapp.com/img/txt.png

[DWORD]:                    https://github.com/cloudcmd/dword
[EDWARD]:                   https://github.com/cloudcmd/edward
[EDWARD_KEYS]:              https://github.com/cloudcmd/edward/#hot-keys

**Cloud Commander** - двухпанельный веб файл менеджер с консолью и редактором. Поможет вам управлять сервером и работать с файлами, каталогами и программами в браузере на любом компьютере, смартфоне или планшете.

![Cloud Commander](//cloudcmd.io/img/logo/cloudcmd.png "Cloud Commander")

Преимущества
---------------
- Открытый код (**MIT License**).
- Две классические панели.
- Возможность **авторизации**.
- Клиент работает в веб браузере.
- Сервер работает под **Windows**, **Linux** и **Mac OS**.
- Может использоваться локально или удаленно.
- Адаптируется под размер экрана.
- **2 встроенных редактора** с поддержкой **подсветки синтаксиса**: [Dword][DWORD] и [Edward][EDWARD].
- [Консоль](https://github.com/cloudcmd/console "Консоль") с поддержкой стандартной командной строки ОС.
- Написан на **JavaScript/Node.js**.

Установка
---------------

Установить **Cloud Commander** проще простого.

- установить последнюю версию [node.js](//nodejs.org/ "node.js"), если вы этого еще не сделали.
- установить ```cloudcmd``` через npm:
 
```sh
npm i cloudcmd -g
```

![NPM_INFO][NPM_INFO_IMG]

Возникли проблемы:

```sh
npm i cloudcmd -g --force
```

Запуск
---------------
Для запуска наберите в консоли:

```sh
cloudcmd
```

**Cloud Commander** поддерживает параметры в командной строке:

|Параметр                   |Действие
|:--------------------------|:--------------------------------------------
| `-h, --help`              | помощь
| `-v, --version`           | вывести версию и выйти
| `-s, --save`              | сохранить настройки
| `-o, --online`            | загружать скрипты с удаленных серверов
| `-a, --auth`              | включить авторизацию
| `-u, --username`          | установить имя пользователя
| `-p, --password`          | установить пароль
| `-c, --config`            | путь к файлу с настройками
| `--editor`                | назначить редактор: "dword" или "edward"
| `--root`                  | установить корневой каталог
| `--prefix`                | установить url префикс
| `--port`                  | назначить порт
| `--minify`                | включить минификацию
| `--progress`              | показывать состояние файловых операций
| `--html-dialogs`          | показывать html диалоги
| `--open`                  | открыть веб браузер после старта сервера
| `--no-server`             | не запускать сервер
| `--no-auth`               | выключить авторизацию
| `--no-online`             | загружать скрипты с локального сервера
| `--no-open`               | не открывать веб браузер после старта сервер
| `--no-minify`             | выключить минификацию
| `--no-progress`           | не показывать состояние файловых операций
| `--no-html-dialogs`       | не использовать html диалоги

Если не задано параметров, Cloud Commander читает информацию с `~/.cloudcmd.json` и использует порт оттуда (`8000` по умолчанию), если переменных `PORT` или `VCAP_APP_PORT` не существует.

Что бы начать работу, введите в адресной строке вашего браузера:

```
http://localhost:8000
```

Обновление
---------------
Если Вы установили Cloud Commander при помощи `npm`, остановите приложение и переустановите его:

```sh
npm update cloudcmd -g
```

После чего запустите его снова, почистите кэш и обновите страницу.

Горячие клавиши
---------------

|Клавиша                |Действие
|:----------------------|:--------------------------------------------
| `F1`                  | помощь
| `F2`                  | переименовать
| `F3`                  | просмотр
| `Shift + F3`          | просмотр в `markdown`
| `F4`                  | редактировать
| `F5`                  | копировать
| `F6`                  | переименовать/переместить
| `F7`                  | новый каталог
| `Shift + F7`          | новый файл
| `F8`, `Delete`        | удалить текущий файл
| `Shift + Delete`      | удалить без запроса о подтверждении
| `F9`                  | меню
| `F10`                 | настройки
| `(*)`                 | выделить/снять выделение со всех файлов
| `(+)`                 | расширить выделение
| `(-)`                 | сузить выделение
| `Ctrl + x`            | вырезать в буфер
| `Ctrl + с`            | копировать в буфер
| `Ctrl + v`            | вставить из буфера
| `Ctrl + r`            | обновить
| `Ctrl + d`            | очистить локальное хранилище
| `Ctrl + a`            | выбрать (выделить) все файлы на панели
| `Ctrl + u`            | поменять панели местами
| `Up`, `Down`, `Enter` | перемещение по файловой системе
| `Alt + Left/Right`    | показать содержимое каталога под курсором в целевой панели
| `Alt + g`             | перейти к каталогу
| `Ctrl + \`            | перейти в корневой каталог
| `Tab`                 | переключение между панелями
| `Page Up`             | вверх на одну страницу
| `Page Down`           | вниз на одну страницу
| `Home`                | в начало списка
| `End`                 | в конец списка
| `Space`               | выделить текущий файл (и получить размер каталога)
| `Insert`              | выделить текущий файл (и перейти к следующему)
| `Shift + F10`         | контекстное меню
| `~`                   | консоль
| `Ctrl + Click`        | открыть файл в новой вкладке

 Просмотр
---------------
![Просмотр](//cloudcmd.io/img/screen/view.png "Просмотр")

### Возможности
- Просматривать изображения.
- Просматривать текстовые файлы.
- Проигрывать аудио.
- Проигрывать видео.

### Горячие клавиши

|Клавиша                |Действие
|:----------------------|:--------------------------------------------
| `F3`                  | открыть
| `Esc`                 | закрыть

Редактор
---------------
![Редактор](//cloudcmd.io/img/screen/edit.png "Редактор")

### Горячие клавиши

|Клавиша                |Действие
|:----------------------|:--------------------------------------------
| `F4`                  | открыть
| `Esc`                 | закрыть
 
[Горячие клавиши Edward][EDWARD_KEYS].

Консоль
---------------
![Консоль](//cloudcmd.io/img/screen/console.png "Консоль")

### Горячие клавиши

|Клавиша                |Действие
|:----------------------|:--------------------------------------------
| `~`                   | открыть
| `Ctrl + p`            | вставить путь текущего каталога
| `Esc`                 | закрыть

[Горячие клавиши console](https://github.com/cloudcmd/console#hot-keys).

Настройки
---------------
![Настройки](//cloudcmd.io/img/screen/config.png "Настройки")

### Горячие клавиши

|Клавиша                |Действие
|:----------------------|:--------------------------------------------
| `F10`                 | открыть
| `Esc`                 | закрыть

Когда Вы меняете одну из опций, файл `~/.cloudcmd.json` может быть сохранен.
Их можно поменять собственноручно в любом текстовом редакторе.
Вот описание опций:

```js
{
    "auth"              : false,            /* разрешить http авторизацию                                      */
    "username"          : "root",           /* имя пользователя для авторизации                                */
    "password"          : "toor",           /* хеш пароля в sha-1 для авторизации                              */
    "algo"              : "sha512WithRSAEncryption", /* криптографический алгоритм                             */
    "editor"            : "edward",         /* по умолчанию, может быть "dword" или "edward"                   */
    "diff"              : false,            /* при сохранении - отсылает патч, а не весь файл                  */
    "zip"               : false,            /* zip текст перед отсылкой / unzip перед сохранением              */
    "notifications"     : false,            /* показывать оповещения, если вкладка не активна                  */
    "localStorage"      : true,             /* локальное хранилище                                             */
    "buffer"            : true,             /* буфер для копирования файлов                                    */
    "dirStorage"        : true,             /* сохранить листинг каталога в localStorage                       */
    "minify"            : false,            /* минификация js, css, html и изображений                         */
    "online"            : true,             /* загрузить файлы js из cdn или Local path                        */
    "open"              : false,            /* открыть веб браузер после старта сервера                        */
    "cache"             : true,             /* кеширование                                                     */
    "showKeysPanel"     : true,             /* показать классическую панель с кнопками функциональных клавиш   */
    "port"              : 8000,             /* http порт                                                       */
    "ip"                : null,             /* ip или null(по умолчанию)                                       */
    "root"              : "/",              /* корневой каталог                                                */
    "prefix"            : "",               /* url префикс                                                     */
    "progress"          : true,             /* показывать состояние файловых операций                          */
    "htmlDialogs"       : true              /* показывать html диалоги                                         */
}
```

Меню
---------------
![Меню](//cloudcmd.io/img/screen/menu.png "Меню")

Щелчок правой кнопкой мыши вызывает контекстное меню с такими пунктами:

- Просмотр
- Правка
- Переименовать
- Удалить
- Запаковать
- Извлечь
- Выгрузить в облако
- Скачать
- Вырезать
- Копировать
- Вставить
- Новый (Файл, Каталог)
- Выгрузить
- Выгрузить с облака
- Выделить всё / снять выделение
- Выйти (доступно в случае включенной `авторизации`)
 
### Горячие клавиши

|Клавиша                |Действие
|:----------------------|:--------------------------------------------
| `F9`                  | открыть
| `Esc`                 | закрыть

Режим одной панели
---------------
Cloud Commander может работать в режиме одной панели, в том случае, если размер экрана не позволяет разместить вторую панель.
Такое может случится в случае использования мобильного, планшета или маленького окна браузера для взаимодействия с файловым менеджером.

![Режим одной панели](//cloudcmd.io/img/screen/one-panel-mode.png "Режим одной панели")

Использование в качестве Middleware
---------------

Cloud Commander может использоваться в качестве middleware для `node.js` приложений основанных на  [socket.io](http://socket.io "Socket.IO") и [express](http://expressjs.com "Express"):

```js
var http        = require('http'),
    cloudcmd    = require('cloudcmd'),
    express     = require('express'),
    io          = require('socket.io'),
    app         = express(),
    
    PORT        = 1337,
    
    server,
    socket;
    
server = http.createServer(app);
socket = io.listen(server);

app.use(cloudcmd({
    socket: socket,          /* используется Config'ом, Edit'ом (не обязательно) и Console'ью (обязательно)  */
    config: {                /* опции настроек (не обязательно)                                              */
        prefix: '/cloudcmd', /* основной URL или функция возвращающая основной URL (не обязательно)          */
    }
}));

server.listen(PORT);
```


Сервер
---------------
Обычно процессы, запущенные с правами отличными от root, не могут слушать порты с номером меньше, чем 1024.
В любом случае, я советую Вам запускать Cloud Commander не под root. Как это сделать?
Существует несколько простых и быстрых вариантов. Один из них - перенаправление портов.

### Iptables
Просто запустите `shell/addtables.sh` для стандартных опций.

```sh
iptables -t nat -L # look rules before
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000
iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 4430
iptables -t nat -L # look reles after
```

Вы должны увидеть что-то вроде ( **8000** и **4430** должно быть в config как **port** и **sslPort** )

```
target     prot opt source               destination
REDIRECT   tcp  --  anywhere             anywhere             tcp dpt:http redir ports 8000
REDIRECT   tcp  --  anywhere             anywhere             tcp dpt:https redir ports 4430
```
Если захотите всё вернуть, просто очистите правила ( **1** и **2** — это номера правил,
в вашем случае они могут отличаться).

```sh
iptables -t nat -D PREROUTING 1
iptables -t nat -D PREROUTING 2
```

###nginx
Возьмите [nginx](http://nginx.org/ "nginx"). В Linux это можно сделать так:

```sh
sudo apt-get install nginx #for ubuntu and debian
```

И сделайте хост файл **/etc/nginx/sites-enabled/io.cloudcmd.io**
( *io.cloudcmd.io* ваше доменное имя) с содержимым:

```sh
server {
    listen 80;
    client_max_body_size 100m;
    server_name io.cloudcmd.io;
    access_log /var/log/nginx/io.cloudcmd.io.access.log;
    location / {
        proxy_pass    http://127.0.0.1:8000/;
    }
}
```

Если вы хотите включить **SSL**, добавьте несколько строчек в раздел сервера:

```sh
server {
    listen 443;
    client_max_body_size 100m;
    ssl                  on;
    ssl_certificate      /home/coderaiser/cloudcmd/ssl/ssl.crt;
    ssl_certificate_key  /home/coderaiser/cloudcmd/ssl/ssl.key;
    server_name io.cloudcmd.io;
    access_log /var/log/nginx/io.cloudcmd.io.access.log;
    location / {
        proxy_pass    http://127.0.0.1:8000/;
    }
}
```

Если Вам нужно перенаправление с **http** на **https**, просто сделайте так:

```sh
server {
    listen 80;
    server_name admin.cloudcmd.io;
    rewrite ^ https://io.cloudcmd.io$request_uri? permanent; #301 redirect
    access_log /var/log/nginx/io.cloudcmd.io.access.log;
}
```

```sh
# create symlink of this file
ln -s ./sites-enabled/io.cloudcmd.io ./sites-available
# restart nginx
/etc/init.d/nginx restart
```

Разворачивание
---------------
`Cloud Commander` можно легко развернуть на [Heroku](https://heroku.com/deploy?template=https://github.com/coderaiser/cloudcmd "Развернуть на Heroku").

[![Развернуть](https://www.herokucdn.com/deploy/button.png "Развернуть на Heroku")]( https://heroku.com/deploy?template=https://github.com/coderaiser/cloudcmd)

Docker
---------------
`Cloud Commander` можно использовать как [docker контейнер](https://hub.docker.com/r/coderaiser/cloudcmd/ "Docker контейнер"):

```sh
docker run -v ~:/root -v /:/mnt/fs -t -p 8000:8000 coderaiser/cloudcmd
```

Настройки будут читаться из домашнего каталога, корень файловой системы монтирован к `/mnt/fs`,
`8000` порт контейнера будет доступен через порт главной системы.

Также Вы можете использовать [docker compose](https://docs.docker.com/compose/ "Docker Compose") с `docker-compose.yml`:

```yml
version: '2'
services:
  web:
    ports:
      - 8000:8000
    volumes:
      - ~:/root
      - /:/mnt/fs
    image: coderaiser/cloudcmd
```

Когда создадите этот файл, запустите:

```sh
docker-compose up
```

История версий
---------------
- *2016.07.19*, **[v5.6.0](//github.com/coderaiser/cloudcmd/releases/tag/v5.6.0)**
- *2016.06.29*, **[v5.5.1](//github.com/coderaiser/cloudcmd/releases/tag/v5.5.1)**
- *2016.06.29*, **[v5.5.2](//github.com/coderaiser/cloudcmd/releases/tag/v5.5.2)**
- *2016.06.15*, **[v5.5.0](//github.com/coderaiser/cloudcmd/releases/tag/v5.5.0)**
- *2016.06.10*, **[v5.4.3](//github.com/coderaiser/cloudcmd/releases/tag/v5.4.3)**
- *2016.06.09*, **[v5.4.2](//github.com/coderaiser/cloudcmd/releases/tag/v5.4.2)**
- *2016.05.25*, **[v5.4.1](//github.com/coderaiser/cloudcmd/releases/tag/v5.4.1)**
- *2016.05.15*, **[v5.4.0](//github.com/coderaiser/cloudcmd/releases/tag/v5.4.0)**
- *2016.05.11*, **[v5.3.2](//github.com/coderaiser/cloudcmd/releases/tag/v5.3.2)**
- *2016.03.28*, **[v5.3.1](//github.com/coderaiser/cloudcmd/releases/tag/v5.3.1)**
- *2016.03.28*, **[v5.3.0](//github.com/coderaiser/cloudcmd/releases/tag/v5.3.0)**
- *2016.03.18*, **[v5.2.3](//github.com/coderaiser/cloudcmd/releases/tag/v5.2.3)**
- *2016.03.10*, **[v5.2.2](//github.com/coderaiser/cloudcmd/releases/tag/v5.2.2)**
- *2016.03.07*, **[v5.2.1](//github.com/coderaiser/cloudcmd/releases/tag/v5.2.1)**
- *2016.03.05*, **[v5.2.0](//github.com/coderaiser/cloudcmd/releases/tag/v5.2.0)**
- *2016.02.26*, **[v5.1.5](//github.com/coderaiser/cloudcmd/releases/tag/v5.1.5)**
- *2016.02.25*, **[v5.1.4](//github.com/coderaiser/cloudcmd/releases/tag/v5.1.4)**
- *2016.02.24*, **[v5.1.3](//github.com/coderaiser/cloudcmd/releases/tag/v5.1.3)**
- *2016.02.21*, **[v5.1.2](//github.com/coderaiser/cloudcmd/releases/tag/v5.1.2)**
- *2016.02.21*, **[v5.1.1](//github.com/coderaiser/cloudcmd/releases/tag/v5.1.1)**
- *2016.02.20*, **[v5.1.0](//github.com/coderaiser/cloudcmd/releases/tag/v5.1.0)**
- *2016.02.13*, **[v5.0.15](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.15)**
- *2016.02.10*, **[v5.0.14](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.14)**
- *2016.02.10*, **[v5.0.13](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.13)**
- *2016.02.10*, **[v5.0.12](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.12)**
- *2016.02.06*, **[v5.0.11](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.11)**
- *2016.02.04*, **[v5.0.10](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.10)**
- *2016.02.02*, **[v5.0.9](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.9)**
- *2016.02.01*, **[v5.0.8](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.8)**
- *2016.01.20*, **[v5.0.7](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.7)**
- *2016.01.15*, **[v5.0.6](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.6)**
- *2016.01.11*, **[v5.0.5](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.5)**
- *2015.12.26*, **[v5.0.4](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.4)**
- *2015.12.08*, **[v5.0.3](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.3)**
- *2015.12.01*, **[v5.0.2](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.2)**
- *2015.11.15*, **[v5.0.1](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.1)**
- *2015.11.15*, **[v5.0.0](//github.com/coderaiser/cloudcmd/releases/tag/v5.0.0)**
- *2015.11.11*, **[v4.7.7](//github.com/coderaiser/cloudcmd/releases/tag/v4.7.7)**
- *2015.11.06*, **[v4.7.6](//github.com/coderaiser/cloudcmd/releases/tag/v4.7.6)**
- *2015.10.29*, **[v4.7.5](//github.com/coderaiser/cloudcmd/releases/tag/v4.7.5)**
- *2015.10.27*, **[v4.7.4](//github.com/coderaiser/cloudcmd/releases/tag/v4.7.4)**
- *2015.10.24*, **[v4.7.3](//github.com/coderaiser/cloudcmd/releases/tag/v4.7.3)**
- *2015.10.14*, **[v4.7.2](//github.com/coderaiser/cloudcmd/releases/tag/v4.7.2)**
- *2015.10.14*, **[v4.7.1](//github.com/coderaiser/cloudcmd/releases/tag/v4.7.1)**
- *2015.10.05*, **[v4.7.0](//github.com/coderaiser/cloudcmd/releases/tag/v4.7.0)**
- *2015.09.28*, **[v4.6.0](//github.com/coderaiser/cloudcmd/releases/tag/v4.6.0)**
- *2015.09.27*, **[v4.5.7](//github.com/coderaiser/cloudcmd/releases/tag/v4.5.7)**
- *2015.09.24*, **[v4.5.6](//github.com/coderaiser/cloudcmd/releases/tag/v4.5.6)**
- *2015.09.23*, **[v4.5.5](//github.com/coderaiser/cloudcmd/releases/tag/v4.5.5)**
- *2015.09.22*, **[v4.5.4](//github.com/coderaiser/cloudcmd/releases/tag/v4.5.4)**
- *2015.09.16*, **[v4.5.3](//github.com/coderaiser/cloudcmd/releases/tag/v4.5.3)**
- *2015.09.03*, **[v4.5.2](//github.com/coderaiser/cloudcmd/releases/tag/v4.5.2)**
- *2015.08.28*, **[v4.5.1](//github.com/coderaiser/cloudcmd/releases/tag/v4.5.1)**
- *2015.08.26*, **[v4.5.0](//github.com/coderaiser/cloudcmd/releases/tag/v4.5.0)**
- *2015.08.25*, **[v4.4.0](//github.com/coderaiser/cloudcmd/releases/tag/v4.4.0)**
- *2015.08.21*, **[v4.3.5](//github.com/coderaiser/cloudcmd/releases/tag/v4.3.5)**
- *2015.08.19*, **[v4.3.4](//github.com/coderaiser/cloudcmd/releases/tag/v4.3.4)**
- *2015.08.17*, **[v4.3.3](//github.com/coderaiser/cloudcmd/releases/tag/v4.3.3)**
- *2015.08.17*, **[v4.3.2](//github.com/coderaiser/cloudcmd/releases/tag/v4.3.2)**
- *2015.08.13*, **[v4.3.1](//github.com/coderaiser/cloudcmd/releases/tag/v4.3.1)**
- *2015.08.11*, **[v4.3.0](//github.com/coderaiser/cloudcmd/releases/tag/v4.3.0)**
- *2015.07.24*, **[v4.2.0](//github.com/coderaiser/cloudcmd/releases/tag/v4.2.0)**
- *2015.07.23*, **[v4.1.2](//github.com/coderaiser/cloudcmd/releases/tag/v4.1.2)**
- *2015.07.23*, **[v4.1.1](//github.com/coderaiser/cloudcmd/releases/tag/v4.1.1)**
- *2015.07.21*, **[v4.1.0](//github.com/coderaiser/cloudcmd/releases/tag/v4.1.0)**
- *2015.07.13*, **[v4.0.0](//github.com/coderaiser/cloudcmd/releases/tag/v4.0.0)**
- *2015.07.09*, **[v3.8.1](//github.com/coderaiser/cloudcmd/releases/tag/v3.8.1)**
- *2015.07.06*, **[v3.8.0](//github.com/coderaiser/cloudcmd/releases/tag/v3.8.0)**
- *2015.07.04*, **[v3.7.2](//github.com/coderaiser/cloudcmd/releases/tag/v3.7.2)**
- *2015.07.04*, **[v3.7.1](//github.com/coderaiser/cloudcmd/releases/tag/v3.7.1)**
- *2015.07.03*, **[v3.7.0](//github.com/coderaiser/cloudcmd/releases/tag/v3.7.0)**
- *2015.07.01*, **[v3.6.0](//github.com/coderaiser/cloudcmd/releases/tag/v3.6.0)**
- *2015.06.27*, **[v3.5.0](//github.com/coderaiser/cloudcmd/releases/tag/v3.5.0)**
- *2015.06.22*, **[v3.4.0](//github.com/coderaiser/cloudcmd/releases/tag/v3.4.0)**
- *2015.06.20*, **[v3.3.0](//github.com/coderaiser/cloudcmd/releases/tag/v3.3.0)**
- *2015.06.12*, **[v3.2.0](//github.com/coderaiser/cloudcmd/releases/tag/v3.2.0)**
- *2015.06.11*, **[v3.1.4](//github.com/coderaiser/cloudcmd/releases/tag/v3.1.4)**
- *2015.06.11*, **[v3.1.3](//github.com/coderaiser/cloudcmd/releases/tag/v3.1.3)**
- *2015.06.10*, **[v3.1.2](//github.com/coderaiser/cloudcmd/releases/tag/v3.1.2)**
- *2015.06.09*, **[v3.1.1](//github.com/coderaiser/cloudcmd/releases/tag/v3.1.1)**
- *2015.06.09*, **[v3.1.0](//github.com/coderaiser/cloudcmd/releases/tag/v3.1.0)**
- *2015.06.04*, **[v3.0.4](//github.com/coderaiser/cloudcmd/releases/tag/v3.0.4)**
- *2015.06.02*, **[v3.0.3](//github.com/coderaiser/cloudcmd/releases/tag/v3.0.3)**
- *2015.05.31*, **[v3.0.2](//github.com/coderaiser/cloudcmd/releases/tag/v3.0.2)**
- *2015.05.29*, **[v3.0.1](//github.com/coderaiser/cloudcmd/releases/tag/v3.0.1)**
- *2015.05.28*, **[v3.0.0](//github.com/coderaiser/cloudcmd/releases/tag/v3.0.0)**
- *2015.05.22*, **[v2.9.3](//github.com/coderaiser/cloudcmd/releases/tag/v2.9.3)**
- *2015.05.22*, **[v2.9.2](//github.com/coderaiser/cloudcmd/releases/tag/v2.9.2)**
- *2015.05.19*, **[v2.9.1](//github.com/coderaiser/cloudcmd/releases/tag/v2.9.1)**
- *2015.05.15*, **[v2.9.0](//github.com/coderaiser/cloudcmd/releases/tag/v2.9.0)**
- *2015.05.14*, **[v2.8.0](//github.com/coderaiser/cloudcmd/releases/tag/v2.8.0)**
- *2015.04.24*, **[v2.7.1](//github.com/coderaiser/cloudcmd/releases/tag/v2.7.1)**
- *2015.04.24*, **[v2.7.0](//github.com/coderaiser/cloudcmd/releases/tag/v2.7.0)**
- *2015.04.17*, **[v2.6.0](//github.com/coderaiser/cloudcmd/releases/tag/v2.6.0)**
- *2015.04.14*, **[v2.5.1](//github.com/coderaiser/cloudcmd/releases/tag/v2.5.1)**
- *2015.04.09*, **[v2.5.0](//github.com/coderaiser/cloudcmd/releases/tag/v2.5.0)**
- *2015.04.03*, **[v2.4.2](//github.com/coderaiser/cloudcmd/releases/tag/v2.4.2)**
- *2015.03.28*, **[v2.4.1](//github.com/coderaiser/cloudcmd/releases/tag/v2.4.1)**
- *2015.03.28*, **[v2.4.0](//github.com/coderaiser/cloudcmd/releases/tag/v2.4.0)**
- *2015.03.26*, **[v2.3.1](//github.com/coderaiser/cloudcmd/releases/tag/v2.3.1)**
- *2015.03.26*, **[v2.3.0](//github.com/coderaiser/cloudcmd/releases/tag/v2.3.0)**
- *2015.03.19*, **[v2.2.1](//github.com/coderaiser/cloudcmd/releases/tag/v2.2.1)**
- *2015.03.13*, **[v2.2.0](//github.com/coderaiser/cloudcmd/releases/tag/v2.2.0)**
- *2015.02.02*, **[v2.1.0](//github.com/coderaiser/cloudcmd/releases/tag/v2.1.0)**
- *2014.12.09*, **[v2.0.0](//github.com/coderaiser/cloudcmd/releases/tag/v2.0.0)**
- *2014.11.21*, **[v1.5.1](//github.com/coderaiser/cloudcmd/releases/tag/v1.5.1)**
- *2014.11.19*, **[v1.5.0](//github.com/coderaiser/cloudcmd/releases/tag/v1.5.0)**
- *2014.11.05*, **[v1.4.1](//github.com/coderaiser/cloudcmd/releases/tag/v1.4.1)**
- *2014.10.28*, **[v1.4.0](//github.com/coderaiser/cloudcmd/releases/tag/v1.4.0)**
- *2014.10.02*, **[v1.3.2](//github.com/coderaiser/cloudcmd/releases/tag/v1.3.2)**
- *2014.09.22*, **[v1.3.1](//github.com/coderaiser/cloudcmd/releases/tag/v1.3.1)**
- *2014.09.18*, **[v1.3.0](//github.com/coderaiser/cloudcmd/releases/tag/v1.3.0)**
- *2014.08.29*, **[v1.2.0](//github.com/coderaiser/cloudcmd/releases/tag/v1.2.0)**
- *2014.07.18*, **[v1.1.1](//github.com/coderaiser/cloudcmd/releases/tag/v1.1.1)**
- *2014.07.10*, **[v1.1.0](//github.com/coderaiser/cloudcmd/releases/tag/v1.1.0)**
- *2014.07.03*, **[v1.0.0](//github.com/coderaiser/cloudcmd/releases/tag/v1.0.0)**
- *2014.06.16*, **[v0.9.2](//github.com/coderaiser/cloudcmd/releases/tag/v0.9.2)**
- *2014.06.11*, **[v0.9.1](//github.com/coderaiser/cloudcmd/releases/tag/v0.9.1)**
- *2014.06.10*, **[v0.9.0](//github.com/coderaiser/cloudcmd/releases/tag/v0.9.0)**
- *2014.04.28*, **[v0.8.4](//github.com/coderaiser/cloudcmd/releases/tag/v0.8.4)**
- *2014.03.19*, **[v0.8.3](//github.com/coderaiser/cloudcmd/releases/tag/v0.8.3)**
- *2014.03.03*, **[v0.8.2](//github.com/coderaiser/cloudcmd/releases/tag/v0.8.2)**
- *2014.02.13*, **[v0.8.1](//github.com/coderaiser/cloudcmd/releases/tag/v0.8.1)**
- *2014.02.13*, **[v0.8.0](//github.com/coderaiser/cloudcmd/releases/tag/v0.8.0)**
- *2013.12.09*, **[v0.7.0](//github.com/coderaiser/cloudcmd/releases/tag/v0.7.0)**
- *2013.11.08*, **[v0.6.0](//github.com/coderaiser/cloudcmd/releases/tag/v0.6.0)**
- *2013.10.17*, **[v0.5.0](//github.com/coderaiser/cloudcmd/releases/tag/v0.5.0)**
- *2013.09.27*, **[v0.4.0](//github.com/coderaiser/cloudcmd/releases/tag/v0.4.0)**
- *2013.08.01*, **[v0.3.0](//github.com/coderaiser/cloudcmd/releases/tag/v0.3.0)**
- *2013.04.22*, **[v0.2.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.2.0.zip)**
- *2013.03.01*, **[v0.1.9](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.1.9.zip)**
- *2012.12.12*, **[v0.1.8](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.1.8.zip)**
- *2012.10.01*, **[v0.1.7](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.1.7.zip)**
- *2012.08.24*, **[v0.1.6](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.1.6.zip)**
- *2012.08.06*, **[v0.1.5](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.1.5.zip)**
- *2012.07.27*, **[v0.1.4](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.1.4.zip)**
- *2012.07.19*, **[v0.1.3](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.1.3.zip)**
- *2012.07.14*, **[v0.1.2](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.1.2.zip)**
- *2012.07.11*, **[v0.1.1](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.1.1.zip)**
- *2012.07.09*, **[v0.1.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.1.0.zip)**

Особая благодарность:
---------------
- [Polietilena](http://polietilena.github.io/ "Polietilena") за **logo** и **favicon**.
- [TarZak](https://github.com/tarzak "TarZak") за русский и украинский переводы.
