# software-lab-HW1
------------------
##### پرسش ها
### 1. پوشه‌ی `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

وقتی با گیت کار می‌کنید و یک مخزن (repository) جدید ایجاد می‌کنید، گیت یک پوشه مخفی به نام `.git` می‌سازد. این پوشه در اصل تمام اطلاعات مربوط به پروژه‌ی شما را نگه می‌دارد، از تاریخچه تغییرات گرفته تا شاخه‌ها، تگ‌ها و تنظیمات مختلف گیت. به عبارت ساده‌تر، این پوشه همان جایی است که گیت تمام جادوهایش را انجام می‌دهد!

برای ساخت این پوشه، کافی است دستور `git init` را در دایرکتوری پروژه خود اجرا کنید. بعد از آن، گیت این پوشه را ایجاد کرده و تمام تغییرات بعدی پروژه در آن ذخیره خواهد شد. اما بیایید نگاهی دقیق‌تر به بخش‌های مهم این پوشه بیندازیم:

#### بخش‌های کلیدی پوشه‌ی `.git`:
- **دایرکتوری `objects`**: گیت در اینجا تمام نسخه‌های فایل‌ها را به‌صورت فشرده نگه می‌دارد. هر بار که چیزی را کامیت می‌کنید، آن تغییرات در این دایرکتوری به‌عنوان یک "شیء" جدید ذخیره می‌شود. این یعنی، هر چیزی که تا به حال در پروژه‌تان تغییر داده‌اید اینجا بایگانی می‌شود.

- **دایرکتوری `refs`**: اینجا، گیت شاخه‌ها (`heads`) و تگ‌ها (`tags`) را نگه می‌دارد. مثلا وقتی روی شاخه‌ی `main` کار می‌کنید، این شاخه به آخرین کامیت در `refs/heads` اشاره می‌کند. اگر هم تگی روی نسخه‌های خاصی از پروژه ایجاد کرده باشید، این تگ‌ها در `refs/tags` ذخیره می‌شوند.

- **دایرکتوری `info`**: این دایرکتوری شامل اطلاعات بیشتری درباره‌ی مخزن است. یکی از فایل‌های مهم اینجا `exclude` است، که الگوهایی را که می‌خواهید گیت آن‌ها را نادیده بگیرد تعریف می‌کند (این شبیه `.gitignore` عمل می‌کند).

- **دایرکتوری `hooks`**: این پوشه حاوی اسکریپت‌های خاصی است که به شما اجازه می‌دهد کارهای خودکار انجام دهید. مثلا، می‌توانید یک اسکریپت بنویسید که هر بار که یک کامیت انجام می‌شود، یک سری تست‌ها به‌صورت خودکار اجرا شوند.

- **فایل `HEAD`**: این فایل به گیت می‌گوید که در حال حاضر روی کدام شاخه کار می‌کنید. مثلا وقتی روی شاخه‌ی `main` هستید، `HEAD` به این شاخه اشاره می‌کند.

- **فایل `config`**: تمام تنظیمات محلی مربوط به مخزن شما (مثل نام و ایمیل کاربر) در این فایل نگه‌داری می‌شود.

### 2. منظور از اتمیک بودن در کامیت اتمیک (Atomic Commit) و درخواست کشش اتمیک (Atomic Pull Request) چیست؟

وقتی از **کامیت اتمیک** صحبت می‌کنیم، منظور این است که هر کامیت باید تغییرات مرتبط با یک بخش مشخص را شامل شود. یعنی اگر قرار است کدی را تغییر دهید، همه‌ی تغییرات مرتبط با آن در یک کامیت بیاید، نه اینکه یک تغییر در چند کامیت پخش شود. این کار به شما کمک می‌کند تا تاریخچه‌ی کامیت‌هایتان واضح و قابل پیگیری باشد. اگر نیاز شد که بعداً به یک نسخه قدیمی برگردید یا بخواهید تغییرات خاصی را پیدا کنید، خیلی راحت‌تر می‌توانید این کار را انجام دهید.

در مورد **درخواست کشش اتمیک (Atomic Pull Request)** هم، ایده این است که وقتی یک pull request ارسال می‌کنید، تمام تغییرات باید یک‌جا و به‌صورت کامل اعمال شوند. اگر مشکلی پیش بیاید، باید بتوانید کل تغییرات درخواست را بازگردانید. این مفهوم کمک می‌کند که تغییرات در مخزن به‌صورت منظم‌تر و پایدارتر باقی بمانند.

### 3. تفاوت دستورهای `fetch`، `pull`، `merge`، `rebase` و `cherry-pick` چیست؟

- **دستور `fetch`**: این دستور تغییرات جدیدی که در مخزن راه‌دور (remote) رخ داده‌اند را دریافت می‌کند، ولی آن‌ها را با کدهای محلی شما ادغام نمی‌کند. این یک راه امن برای بررسی تغییرات جدید است بدون اینکه تغییرات شاخه‌تان را به خطر بیاندازید. شما می‌توانید قبل از اینکه تصمیم بگیرید این تغییرات را ادغام کنید، آن‌ها را مرور کنید.

- **دستور `pull`**: این دستور به‌نوعی ترکیبی از `fetch` و `merge` است. اول تغییرات جدید را از مخزن راه‌دور دریافت می‌کند و سپس آن‌ها را با شاخه‌ی فعلی شما ادغام می‌کند. اگر تغییرات جدید و تغییرات شما با هم تضاد داشته باشند، ممکن است با مشکلات ادغام (merge conflicts) روبرو شوید.

- **دستور `merge`**: این دستور برای ترکیب تغییرات دو شاخه مختلف استفاده می‌شود. با این کار، یک کامیت جدید ایجاد می‌شود که تاریخچه‌ی هر دو شاخه را حفظ می‌کند. به‌طور کلی، `merge` تاریخچه‌ی پروژه را به‌صورت غیرخطی نگه می‌دارد.

- **دستور `rebase`**: این دستور تغییرات شما را به بالای شاخه اصلی منتقل می‌کند و تاریخچه‌ی کامیت‌ها را به‌صورت خطی در می‌آورد. این کار باعث می‌شود که تاریخچه‌ی پروژه تمیزتر به نظر برسد. با این حال، اگر روی پروژه‌ای کار می‌کنید که افراد دیگر هم در آن دخیل هستند، استفاده از `rebase` باید با دقت انجام شود، زیرا ممکن است تغییرات افراد دیگر تحت تاثیر قرار بگیرد.

- **دستور `cherry-pick`**: این دستور به شما اجازه می‌دهد یک کامیت خاص را از یک شاخه دیگر بردارید و روی شاخه فعلی خود اعمال کنید، بدون اینکه تمام تاریخچه یا تغییرات آن شاخه را بیاورید. این دستور برای زمانی مفید است که می‌خواهید تنها بخشی از تغییرات شاخه‌ای را استفاده کنید.

### 4. تفاوت دستورهای `reset`، `revert`, `restore`, `switch` و `checkout` چیست؟

- **دستور `reset`**: اگر بخواهید پروژه‌تان را به یک نقطه قبلی در تاریخچه بازگردانید، از این دستور استفاده می‌کنید. این دستور می‌تواند کامیت‌ها را به‌طور کامل از تاریخچه حذف کند. `reset` چند حالت دارد: `--soft` که فقط شاخه را به عقب می‌برد ولی تغییرات را حفظ می‌کند، و `--hard` که همه‌چیز را به حالت قبلی برمی‌گرداند و حتی تغییرات فایل‌های شما را هم پاک می‌کند.

- **دستور `revert`**: این دستور یک کامیت جدید ایجاد می‌کند که تغییرات یک یا چند کامیت قبلی را برمی‌گرداند، بدون اینکه تاریخچه اصلی مخدوش شود. این کار در مواقعی مفید است که می‌خواهید اثرات یک کامیت را لغو کنید ولی همچنان آن کامیت در تاریخچه باقی بماند.

- **دستور `restore`**: این دستور فایل‌ها را از ناحیه‌ی stage یا از یک کامیت خاص بازیابی می‌کند، بدون اینکه تغییری در شاخه یا تاریخچه پروژه ایجاد کند. این دستور بیشتر برای برگرداندن فایل‌های تغییر کرده به حالت قبلی‌شان استفاده می‌شود.

- **دستور `checkout`**: این دستور چندکاره است. هم می‌توانید از آن برای جابجا شدن بین شاخه‌ها استفاده کنید و هم می‌توانید برای برگرداندن فایل‌ها به نسخه‌ی قبلی از آن بهره ببرید. در حال حاضر بیشتر استفاده از آن برای جابجایی شاخه‌ها با دستور `switch` جایگزین شده است.

- **دستور `switch`**: نسخه ساده‌تر و تخصصی‌تر `checkout` است که فقط برای جابجایی بین شاخه‌ها استفاده می‌شود. این دستور کار را برای جابجایی بین شاخه‌ها سریع‌تر و آسان‌تر می‌کند.

### 5. مفهوم `stage` یا `index` چیست؟ دستور `stash` چه کاری انجام می‌دهد؟

**ناحیه‌ی stage (یا index)** جایی است که تغییرات شما قبل از اینکه کامیت شوند، در آن جمع‌آوری می‌شوند. وقتی با دستور `git add` فایل‌هایی را برای کامیت آماده می‌کنید، این تغییرات به ناحیه‌ی stage اضافه می‌شوند و بعد از کامیت کردن، این تغییرات به‌طور رسمی به مخزن اضافه می‌شوند.

**دستور `stash`** به شما کمک می‌کند تغییرات فعلی‌تان را به‌طور موقت کنار بگذارید تا بتوانید روی یک کار دیگر تمرکز کنید. فرض کنید دارید روی یک ویژگی کار می‌کنید ولی ناگهان نیاز دارید به یک مشکل فوری رسیدگی کنید. در این حالت می‌توانید تغییرات خود را با دستور `stash` ذخیره کرده و به شاخه دیگری بروید. بعداً می‌توانید این تغییرات را با دستور `git stash pop` بازگردانید.

### 

6. مفهوم `snapshot` به چه معناست؟ ارتباط آن با `commit` چیست؟

در گیت، **snapshot** به‌معنای ثبت یک تصویر لحظه‌ای از وضعیت پروژه است. هر بار که شما یک کامیت انجام می‌دهید، گیت از کل فایل‌ها و دایرکتوری‌های پروژه یک snapshot می‌گیرد. این یعنی شما می‌توانید هر زمان که بخواهید به یک نقطه خاص از تاریخچه پروژه برگردید و وضعیت آن را در آن لحظه مشاهده کنید. کامیت‌ها به نوعی همان snapshotهای پروژه هستند که گیت آن‌ها را برای شما ذخیره می‌کند.

### 7. تفاوت‌های مخزن محلی (Local Repository) و مخزن راه‌دور (Remote Repository) چیست؟

- **مخزن محلی (Local Repository)**: این مخزن روی کامپیوتر شما ذخیره می‌شود و شما می‌توانید بدون نیاز به اینترنت و به‌صورت آفلاین روی آن کار کنید. همه تغییرات، تاریخچه و شاخه‌ها به‌صورت محلی ذخیره می‌شوند.

- **مخزن راه‌دور (Remote Repository)**: این مخزن روی یک سرور (مثل GitHub یا GitLab) قرار دارد و به شما اجازه می‌دهد تغییرات خود را با دیگر اعضای تیم به‌اشتراک بگذارید. این مخزن معمولاً برای همکاری بین اعضای تیم استفاده می‌شود و می‌تواند یک پشتیبان برای کدهای شما باشد.

#### تفاوت‌های کلیدی:
- **کار آفلاین**: مخزن محلی به شما اجازه می‌دهد به‌صورت آفلاین کار کنید، در حالی که برای دسترسی به مخزن راه‌دور باید آنلاین باشید.
- **سرعت**: انجام کارهایی مثل کامیت کردن یا مشاهده تاریخچه در مخزن محلی سریع‌تر است، چون همه چیز به‌صورت لوکال ذخیره شده است.
- **پشتیبان‌گیری**: مخزن راه‌دور به‌عنوان یک پشتیبان عمل می‌کند و اگر سیستم محلی شما خراب شود، تغییرات در مخزن راه‌دور همچنان امن هستند.
- **همکاری**: مخزن راه‌دور برای به‌اشتراک‌گذاری تغییرات و همکاری تیمی مناسب است. همه اعضای تیم می‌توانند به‌صورت هماهنگ روی پروژه کار کنند و تغییرات را با یکدیگر ادغام کنند.

---
#### گزارش پروژه




### فایل `.gitignore`:
در Git، از فایل `.gitignore` برای مشخص کردن فایل‌ها و دایرکتوری‌هایی استفاده می‌شود که نباید توسط Git **tracked** شوند. این فایل به Git اعلام می‌کند که از نسخه‌گذاری این فایل‌ها صرف‌نظر کرده و آن‌ها را در مراحل commit و push نادیده بگیرد. این کار به چند دلیل انجام می‌شود:
- جلوگیری از ورود فایل‌های لوکال مرتبط با تنظیمات سیستم کاربر یا IDE (مثل پوشه‌ی `.idea` یا فایل‌های `.vscode`).
- جلوگیری از commit کردن فایل‌های بزرگ و غیرضروری مانند پوشه‌ی `node_modules` که قابل بازسازی است.
- جلوگیری از commit کردن فایل‌های موقتی و فایل‌های لاگ یا خروجی کامپایل (مثل `.log` و `.tmp`).

یک نمونه از محتوای فایل `.gitignore` برای یک پروژه می‌تواند به این شکل باشد:
```gitignore
# Dependencies
node_modules/
vendor/

# Log files
*.log

# Compiled source
*.class
*.pyc
*.o

# Temporary files
*.tmp
*.lock

# IDE files
.idea/
.vscode/
```
برای تولید فایل‌های `.gitignore` به شکل اتوماتیک و متناسب با زبان یا فریم‌ورک خاص پروژه، ابزارهایی مثل [Toptal Gitignore Generator](https://www.toptal.com/developers/gitignore) وجود دارند که فایل مناسب را براساس نیاز پروژه شما تولید می‌کنند.

### Commit:
در Git، **commit** عملی است که تغییرات فعلی را به تاریخچه پروژه اضافه می‌کند و به عنوان یک نقطه بازگشت (snapshot) عمل می‌کند. هر commit یک شناسه یکتا (SHA-1 hash) دارد که به شناسایی آن در مخزن کمک می‌کند. Commit‌ها باید شامل یک پیام توضیحی (commit message) باشند که تغییرات اعمال‌شده را به طور خلاصه بیان کنند. برای مثال، در خط فرمان می‌توانید از این دستورات استفاده کنید:
```bash
git add .
git commit -m "توضیح مختصر از تغییرات"
git push origin branch-name
```
در این مثال، ابتدا تغییرات با استفاده از `git add` به **staging area** اضافه شده و سپس با `git commit` و یک پیام توضیحی ثبت می‌شوند. در نهایت، تغییرات با `git push` به مخزن **remote** منتقل می‌شوند.

### Branch:
Git از **branching** برای مدیریت توسعه موازی و همزمان استفاده می‌کند. هر branch به شما اجازه می‌دهد تا تغییرات جدیدی را بدون تأثیرگذاری مستقیم بر branch اصلی (معمولاً `main` یا `master`) انجام دهید. پس از انجام و تکمیل تغییرات، این branch می‌تواند به شاخه اصلی merge شود.

برای مشاهده branchهای موجود در مخزن محلی:
```bash
git branch
```
برای ایجاد یک branch جدید و جابه‌جایی به آن:
```bash
git checkout -b feature/new-feature
```
پس از اتمام توسعه در یک branch، می‌توان تغییرات آن را به شاخه اصلی (یا هر شاخه دیگر) merge کرد.

### Protected Branch:
در پروژه‌های بزرگ، **protected branches** به منظور جلوگیری از تغییرات مستقیم و ناخواسته بر روی branchهای حساس (مثل `main` یا `develop`) استفاده می‌شوند. این مکانیزم از تغییرات بدون بازبینی یا از دست رفتن داده‌های مهم جلوگیری می‌کند. 

شاخه‌های محافظت‌شده معمولاً با قوانینی مانند موارد زیر تنظیم می‌شوند:
- جلوگیری از commit مستقیم به branch.
- نیاز به **code review** و تأیید بررسی‌کننده‌ها قبل از merge.
- اطمینان از حل کامل conflictها قبل از merge.

این سیاست‌ها برای افزایش کیفیت کد و جلوگیری از مشکلات احتمالی در شاخه‌های اصلی پروژه به کار می‌روند.

### Pull Request:
**Pull Request** (یا PR) یکی از اصلی‌ترین مکانیزم‌ها برای پیشنهاد تغییرات در یک پروژه Git است. PR به توسعه‌دهندگان اجازه می‌دهد تا تغییرات خود را از یک branch به branch دیگر پیشنهاد دهند تا توسط تیم یا مدیر پروژه بررسی شود. 

یک PR معمولاً شامل بخش‌های زیر است:
- **عنوان (Title)**: بیانگر خلاصه‌ای از تغییرات پیشنهادی.
- **branch‌های درگیر**: شاخه مبدأ و شاخه مقصد که تغییرات در آن‌ها انجام می‌شود.
- **Reviewers**: افرادی که مسئول بررسی و تأیید PR هستند.
- **Assignees**: توسعه‌دهندگانی که روی PR کار کرده‌اند.
- **توضیحات (Description)**: جزئیات تغییرات اعمال‌شده در PR.
- **تغییرات فایل‌ها (Files Changed)**: نمایش لیستی از فایل‌هایی که تغییر کرده‌اند.

برای ایجاد یک PR در GitHub:
1. ابتدا تغییرات خود را در branch جدیدی اعمال کنید.
2. سپس یک PR ایجاد کنید و branch مبدأ و مقصد را مشخص کنید.
3. پس از ارسال PR، بررسی‌کنندگان تغییرات را بررسی کرده و در صورت تأیید، تغییرات شما merge می‌شود.

### Conflict:
**Conflict** زمانی رخ می‌دهد که تغییرات متناقض در دو branch به‌طور همزمان روی یک بخش از کد اعمال شود. Git به‌طور خودکار نمی‌تواند تشخیص دهد که کدام تغییر صحیح است، بنابراین نیاز به حل دستی conflict دارید. برای حل conflict:
1. ابتدا branch خود را با شاخه مقصد merge می‌کنید.
2. اگر conflict رخ دهد، Git فایل‌های دچار conflict را علامت‌گذاری می‌کند.
3. شما باید به‌صورت دستی فایل‌ها را ویرایش کرده و تصمیم بگیرید که کدام تغییرات را نگه دارید.
4. پس از حل conflict، تغییرات را commit کرده و به روند ادامه دهید.

مثال حل conflict:
```bash
git merge branch-name
# Git conflict message appears
# Edit files to resolve conflicts
git add .
git commit -m "Resolved merge conflicts"
```
برای جلوگیری از conflictهای مکرر، به‌روزرسانی مرتب branchها با branch اصلی پروژه توصیه می‌شود.

---


