---
layout: default
lang:
 - name: English
   link: http://cloudcmd.io
   translation: на Английском
 
 - name: Ukrainian
   link: http://ua.cloudcmd.io
   translation: на Украинском
 
 - name: Russian
   link: http://ru.cloudcmd.io
   translation: на Русском
---

Cloud Commander 1.3.2
===============
###[Главная][MainURL] [Блог][BlogURL] Демо(![JitSu][JitSu_LIVE_IMG] [JitSu][JitSuURL], ![Heroku][Heroku_LIVE_IMG] [Heroku][HerokuURL])
[NPM_INFO_IMG]:             https://camo.githubusercontent.com/254a020afe689842501ef5a79c04ba909f9b29d2/68747470733a2f2f6e6f6465692e636f2f6e706d2f636c6f7564636d642e706e673f646f776e6c6f6164733d7472756526267374617273 "npm install cloudcmd"
[MainURL]:                  http://cloudcmd.io "Главная"
[BlogURL]:                  http://blog.cloudcmd.io "Блог"
[JitSuURL]:                 http://cloudcmd.jit.su "JitSu"
[HerokuURL]:                http://cloudcmd.herokuapp.com/ "Heroku"
[JitSu_LIVE_IMG]:           https://status-ok.cloudcmd.io/host/cloudcmd.jit.su/img/txt.png "JitSu"
[HEROKU_LIVE_IMG]:          https://status-ok.cloudcmd.io/host/cloudcmd.herokuapp.com/img/txt.png "Heroku"

**Cloud Commander** - двухпанельный веб файл менеджер с консолью и редактором. Поможет вам управлять сервером и работать с файлами, папками и программами в браузере на любом компьютере, смартфоне или планшете.

![Cloud Commander](http://cloudcmd.io/img/logo/cloudcmd.png "Cloud Commander")

Преимущества
---------------
- Открытый код (**MIT License**).
- Две классические панели.
- Возможность **авторизации**.
- Клиент работает в веб браузере.
- Сервер работает под **Windows**, **Linux** и **Mac OS**.
- Может использоваться локально или удаленно.
- Адаптируется под размер экрана.
- **Редактор** с поддержкой **подсветки синтаксиса** для более чем 110 языков.
- **Консоль** с поддержкой стандартной командной строки ОС.
- Написан на **JavaScript/Node.js**.

Установка
---------------

Установить **Cloud Commander** проще простого.

- установить [node.js](//nodejs.org/ "node.js").
- установить ```cloudcmd``` через npm:
 
```sh
npm install cloudcmd #local install или
npm install cloudcmd -g #global install
```

![NPM_INFO][NPM_INFO_IMG]

Запуск
---------------
Что бы запустить **Cloud Commander**, измените директорию на `node_modules/cloudcmd` и
используйте команду:

    node bin/cloudcmd

или при установке с флагом `-g`, просто введите в любой папке:

    cloudcmd

**Cloud Commander** поддерживает параметры в командной строке:

|Параметр               |Действие
|:----------------------|:--------------------------------------------
| `-h, --help`          | помощь
| `-v, --version`       | вывести версию
| `-p, --port`          | назначить порт

Если не задано параметров, Cloud Commander читает информацию с `json/config.json` и использует порт оттуда (`8000` по умолчанию), если переменных `PORT` или `VCAP_APP_PORT` не существует.

Что бы начать работу, введите в адресной строке вашего браузера:

    http://localhost:<port>

Обновление
---------------
Если Вы установили Cloud Commander при помощи `npm`, просто переустановите его:

    npm i cloudcmd -g

После чего нужно очистить кэш браузера, перезапустить Cloud Commander и обновить страницу.

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
| `F7`                  | новая папка
| `Shift + F7`          | новый файл
| `F8`, `Delete`        | удалить текущий файл
| `Shift + Delete`      | удалить без запроса о подтверждении
| `F9`                  | меню
| `F10`                 | настройки
| `(*)`                 | виделить/снять выделение со всех файлов
| `(+)`                 | расширить выделение
| `(-)`                 | сузить выделение
| `Ctrl + x`            | вырезать в буфер
| `Ctrl + с`            | копировать в буфер
| `Ctrl + v`            | вставить с буфера
| `Ctrl + r`            | обновить
| `Ctrl + d`            | очистить локальное хранилище
| `Alt  + q`            | отключить привязку клавиш
| `Alt  + s`            | включить привязки клавиш
| `Ctrl + A`            | выбрать (выделить) все файлы на панели
| `Up`, `Down`, `Enter` | перемещение по файловой системе
| `Ctrl + \`            | перейти в корневую папку
| `Tab`                 | переключение между панелями
| `Page Up`             | вверх на одну страницу
| `Page Down`           | вниз на одну страницу
| `Home`                | в начало списка
| `End`                 | в конец списка
| `Space`               | выделить текущий файл (и получить размер папки)
| `Insert`              | выделить текущий файл (и перейти к следующему)
| `Shift + F10`         | контекстное меню
| `~`                   | консоль
| `Ctrl + Click`        | открыть файл в новой вкладке

Редактор
---------------
![Edit](http://cloudcmd.io/img/screen/edit.png "Edit")


###Горячие клавиши
|Клавиша                |Действие
|:----------------------|:--------------------------------------------
| `F4`                  | открыть
| `Ctrl + s`            | сохранить
| `Ctrl + f`            | поиск
| `Ctrl + f + f`        | замена
| `Ctrl + g`            | перейти к строке
| `Esc`                 | закрыть
 
Подробнее [Горячие клавиши Ace](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts "Горячие клавиши Ace").

Консоль
---------------
![Консоль](http://cloudcmd.io/img/screen/console.png "Консоль")

###Горячие клавиши
|Клавиша                |Действие
|:----------------------|:--------------------------------------------
| `~`                   | открыть
| `Ctrl + p`            | вставить путь текущей папки
| `Ctrl + z`            | отменить текущую строку
| `Ctrl + l`            | очистить
| `Esc`                 | закрыть

Подробнее [Jq-console горячие клавиши](https://github.com/replit/jq-console#default-key-config).

Настройки
---------------
![Настройки](http://cloudcmd.io/img/screen/config.png "Настройки")

###Горячие клавиши
|Клавиша                |Действие
|:----------------------|:--------------------------------------------
| `F10`                 | открыть
| `Esc`                 | закрыть

Меню
---------------
![Menu](http://cloudcmd.io/img/screen/menu.png "Меню")
Щелчок правой кнопкой мыши вызывает контекстное меню с такими пунктами:

- Просмотр
- Правка
- Переименовать
- Удалить
- запаковать
- распаковать
- Выгрузить
- Выгрузить в (Dropbox, Github, GDrive)
- Загрузить
- Новый (Файл, Папка, с облака)
- Вырезать
- Копировать
- Вставить
- Выделить всё / снять выделение
 
###Горячие клавиши
|Клавиша                |Действие
|:----------------------|:--------------------------------------------
| `F9`                  | открыть
| `Esc`                 | закрыть

Настройки
---------------
Все основные настройки, можно осуществлять в `json/config.json`.

```js
{
    "auth"              : false,            /* разрешить http авторизацию                                      */
    "username"          : "root",           /* имя пользователя для авторизации                                */
    "password"          : "toor",           /* хеш пароля в sha-1 для авторизации                              */
    "analytics"         : true,             /* поддержка google analytics                                      */
    "diff"              : false,            /* при сохранении - отсылает патч, а не весь файл                  */
    "zip"               : false,            /* zip текст перед отсылкой / unzip перед сохранением              */
    "notifications"     : false,            /* показывать оповещения, если вкладка не активна                  */
    "localStorage"      : true,             /* кеширование содержимого папки                                   */
    "buffer"            : true,             /* буфер для копирования файлов                                    */
    "dirStorage"        : true,             /* сохранить листинг директории в localStorage                     */
    "minify"            : true,             /* минификация js, css, html и изображений                         */
    "cache"             : true,             /* кеширование                                                     */
    "online"            : true,             /* загрузить файлы js из cdn или Local path                        */
    "showKeysPanel"     : true,             /* показать классическую панель с кнопками функциональных клавиш   */
    "server"            : true,             /* режим сервера или тестирования                                  */
    "port"              : 8000,             /* http порт                                                       */
    "ip"                : null,             /* ip или null(по умолчанию)                                       */
}
```

Если вы изменили **config** и хотите продолжать обновляться при помощи git,
Вам нужно применить следующую команду в корневой директории **Cloud Commander**:

```
git update-index --assume-unchanged json/config.json
```

Что бы вернуться к отслеживанию:

```
git update-index --no-assume-unchanged json/config.json
```

Сервер
---------------
Обычно процессы, запущенные с правами отличными от root, не могут слушать порты с номером меньше, чем 1024.
В любом случае, я советую Вам запускать Cloud Commander не под root. Как это сделать?
Существует несколько простых и быстрых вариантов. Один из них - перенаправление портов через iptables.

###Iptables
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

Если вы хотите включить **ssl**, добавьте несколько строчек в раздел сервера:

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

Для запуска Cloud Commander в качестве демона в Linux установите **log** в **true** в config-файлe и
введите:
    
    nohup node cloudcmd

Список дополнительных модулей
---------------
Для расширения функционала файлового менеджера используются следующие модули:

- [Ace]                     [AceURL]
- [Diff-Match-Patch]        [Diff-Match-PatchURL]
- [Minify]                  [MinifyURL]
- [FancyBox]                [FancyBoxURL]
- [console-io]              [console-ioURL]
- [github]                  [githubURL]
- [dropbox-js]              [dropbox-jsURL]
- [jquery]                  [jqueryURL]
- [socket.io]               [socketIOURL]
- [http-auth]               [httpAuthURL]
- [rimraf]                  [rimrafURL]
- [mkdirp]                  [mkdirpURL]

[AceURL]:                   http://ace.ajax.org/ "Ace"
[Diff-Match-PatchURL]:      https://code.google.com/p/google-diff-match-patch/ "Diff-Match-Patch"
[MinifyURL]:                http://coderaiser.github.io/minify "Minify"
[FancyBoxURL]:              //github.com/fancyapps/fancyBox "FancyBox"
[console-ioURL]:            //github.com/cloudcmd/console "console-io"
[githubURL]:                //github.com/michael/github "github"
[dropbox-jsURL]:            //github.com/dropbox/dropbox-js "dropbox-js"
[jqueryURL]:                //jquery.com
[socketIOURL]:              http://socket.io
[httpAuthURL]:              //github.com/gevorg/http-auth
[rimrafURL]:                //github.com/isaacs/rimraf "rimraf"
[mkdirpURL]:                //github.com/substack/node-mkdirp

Присоединиться к проекту
---------------
Если вы желаете присоединиться к проекту — направьте pull запрос в dev ветку.
Получение dev версии **Cloud Commander**:

    git clone git://github.com/coderaiser/cloudcmd.git
    cd cloudcmd && git checkout dev

Возможно, вам понадобится dev версия Minify,
в таком случае наберите следующие команды:

    cd node_modules
    rm -rf minify
    git clone git://github.com/coderaiser/minify
    git checkout dev

История версий
---------------
- *2014.10.02*, **[v1.3.2](//github.com/cloudcmd/archive/raw/master/cloudcmd-v1.3.2.zip)**
- *2014.09.22*, **[v1.3.1](//github.com/cloudcmd/archive/raw/master/cloudcmd-v1.3.1.zip)**
- *2014.09.18*, **[v1.3.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v1.3.0.zip)**
- *2014.08.29*, **[v1.2.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v1.2.0.zip)**
- *2014.07.18*, **[v1.1.1](//github.com/cloudcmd/archive/raw/master/cloudcmd-v1.1.1.zip)**
- *2014.07.10*, **[v1.1.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v1.1.0.zip)**
- *2014.07.03*, **[v1.0.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v1.0.0.zip)**
- *2014.06.16*, **[v0.9.2](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.9.2.zip)**
- *2014.06.11*, **[v0.9.1](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.9.1.zip)**
- *2014.06.10*, **[v0.9.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.9.0.zip)**
- *2014.04.28*, **[v0.8.4](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.8.4.zip)**
- *2014.03.19*, **[v0.8.3](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.8.3.zip)**
- *2014.03.03*, **[v0.8.2](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.8.2.zip)**
- *2014.02.13*, **[v0.8.1](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.8.1.zip)**
- *2014.02.13*, **[v0.8.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.8.0.zip)**
- *2013.12.09*, **[v0.7.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.7.0.zip)**
- *2013.11.08*, **[v0.6.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.6.0.zip)**
- *2013.10.17*, **[v0.5.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.5.0.zip)**
- *2013.09.27*, **[v0.4.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.4.0.zip)**
- *2013.08.01*, **[v0.3.0](//github.com/cloudcmd/archive/raw/master/cloudcmd-v0.3.0.zip)**
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
- [TarZak](https://github.com/tarzak) за русский и украинский переводы.
