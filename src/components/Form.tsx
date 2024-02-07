import { FormEvent, useState } from "react";
import "./Form.css";
import voiceActor from "./Newsletter.mp3";
const Form = () => {
  const [data, setData] = useState([
    { id: 1, title: "nation", answer: 0 },
    { id: 2, title: "disease", answer: 0 },
    { id: 3, title: "untold", answer: 0 },
    { id: 4, title: "geography", answer: 0 },
    { id: 5, title: "physic", answer: 0 },
    { id: 6, title: "birth", answer: 0 },
    { id: 7, title: "language", answer: 0 },
    { id: 8, title: "news", answer: 0 },
    { id: 9, title: "newton", answer: 0 },
    { id: 10, title: "literature", answer: 0 },
  ]);
  const handlesubmit = (event: FormEvent) => {
    event.preventDefault();
    let objectSent = data.map(
      (item) => item.id + " " + item.title + " " + item.answer
    );
    fetch("https://fourty7.ir/mafahimesupertanz/recieve.php", {
      method: "POST",
      body: JSON.stringify(objectSent),
    });
    function play() {
      new Audio(voiceActor).play();
    }
    play();
  };
  return (
    <form onSubmit={(event) => handlesubmit(event)}>
      <div className="mb-3">
        {/* Question 1 */}
        <div className="question">
          <div>
            <label htmlFor="question_one" className="question-title">
              ملیت آقای کت شلوار شبیه به ملیت کدام کشور می باشد؟
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 1 ? { ...item, answer: 1 } : item
                  )
                )
              }
              type="radio"
              name="question_one"
              className="form-control"
            />
            <label htmlFor="question_one" className="form-label">
              نیجریه
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 1 ? { ...item, answer: 2 } : item
                  )
                )
              }
              type="radio"
              name="question_one"
              className="form-control"
            />
            <label htmlFor="question_one" className="form-label">
              یمن
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 1 ? { ...item, answer: 3 } : item
                  )
                )
              }
              type="radio"
              name="question_one"
              className="form-control"
            />
            <label htmlFor="question_one" className="form-label">
              آلمان
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 1 ? { ...item, answer: 4 } : item
                  )
                )
              }
              type="radio"
              name="question_one"
              className="form-control"
            />
            <label htmlFor="question_one" className="form-label">
              مکزیک
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 1 ? { ...item, answer: 5 } : item
                  )
                )
              }
              type="radio"
              name="question_one"
              className="form-control"
            />
            <label htmlFor="question_one" className="form-label">
              هند
            </label>
          </div>
        </div>
        {/* Question 2 */}
        <div className="question">
          <div>
            <label htmlFor="question_two" className="question-title">
              رنگ کراوات آقای کت شلوار شبیه علائم کدام یک از موارد زیر است؟
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 2 ? { ...item, answer: 1 } : item
                  )
                )
              }
              type="radio"
              name="question_two"
              className="form-control"
            />
            <label htmlFor="question_two" className="form-label">
              نکروز انگشت
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 2 ? { ...item, answer: 2 } : item
                  )
                )
              }
              type="radio"
              name="question_two"
              className="form-control"
            />
            <label htmlFor="question_two" className="form-label">
              پاره شدن کیسه صفرا
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 2 ? { ...item, answer: 3 } : item
                  )
                )
              }
              type="radio"
              name="question_two"
              className="form-control"
            />
            <label htmlFor="question_two" className="form-label">
              بی اختیاری ادرار
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 2 ? { ...item, answer: 4 } : item
                  )
                )
              }
              type="radio"
              name="question_two"
              className="form-control"
            />
            <label htmlFor="question_two" className="form-label">
              گرفتن نمونه ای از ماده ای در بدن که دارای درصد اشباع هموگلوبین
              بالا می باشد.
            </label>
          </div>
        </div>
        {/* Question 3 */}
        <div className="question">
          <div>
            <label htmlFor="question_three" className="question-title">
              کدام یک از موارد زیر در فرم آقای کت شلوار ذکر <ins>نشده</ins> بود؟
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 3 ? { ...item, answer: 1 } : item
                  )
                )
              }
              type="radio"
              name="question_three"
              className="form-control"
            />
            <label htmlFor="question_three" className="form-label">
              نام و نام خانوادگی
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 3 ? { ...item, answer: 2 } : item
                  )
                )
              }
              type="radio"
              name="question_three"
              className="form-control"
            />
            <label htmlFor="question_three" className="form-label">
              مکان گیرنده
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 3 ? { ...item, answer: 3 } : item
                  )
                )
              }
              type="radio"
              name="question_three"
              className="form-control"
            />
            <label htmlFor="question_three" className="form-label">
              شماره انتقالی دفتر
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 3 ? { ...item, answer: 4 } : item
                  )
                )
              }
              type="radio"
              name="question_three"
              className="form-control"
            />
            <label htmlFor="question_three" className="form-label">
              شماره فکس برگه
            </label>
          </div>
        </div>
        {/* Question 4 */}
        <div className="question">
          <div>
            <label htmlFor="question_four" className="question-title">
              آقای کت شلوار از کدام یک از جهت های جغرافیایی زیر وارد شد؟ ( صورت
              شما شمال، پشت شما جنبوب، راستتان شرق، و چپتان غرب)
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 4 ? { ...item, answer: 1 } : item
                  )
                )
              }
              type="radio"
              name="question_four"
              className="form-control"
            />
            <label htmlFor="question_four" className="form-label">
              شمال شرقی
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 4 ? { ...item, answer: 2 } : item
                  )
                )
              }
              type="radio"
              name="question_four"
              className="form-control"
            />
            <label htmlFor="question_four" className="form-label">
              جنوب شرقی
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 4 ? { ...item, answer: 3 } : item
                  )
                )
              }
              type="radio"
              name="question_four"
              className="form-control"
            />
            <label htmlFor="question_four" className="form-label">
              شرق
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 4 ? { ...item, answer: 4 } : item
                  )
                )
              }
              type="radio"
              name="question_four"
              className="form-control"
            />
            <label htmlFor="question_five" className="form-label">
              غرب
            </label>
          </div>
        </div>
        {/* Question 5 */}
        <div className="question">
          <div>
            <label htmlFor="question_five" className="question-title">
              به علت خصومت شخصی کفش آقای کت شلوار با زمین، فشار لحظه ای وارد بر
              سطح زمین 780 پاسکال می باشد،در حالی که قد او 178 سانتی متر و
              اختلاف بیضوی بین دو کتف او 20 سانتی متر مربع است اگر طبق قاعده
              <mark>" گهی پشت بر زین و گهی زین به پشت"</mark>آقای کت شلوار به 10
              قسمت مساوی تقسیم شود، هر یک قسمت او چه شتابی دارد و اندازه سطح
              مقطع کفش آقای کت شلوار نسبت به خودش در مجموع با یک پای قطع شده
              ایشان چقدر میباشد؟ (از مقادیر تقریبی کوچک چشم پوشی شود)
            </label>
            <div className="question-last">
              <p>
                <p>سایز کفش: 44 , عرض کفش: 4 (cm)</p>
                &rho; : 58500(g/cm <sup>3</sup>)<p>P: F/A (Pa)</p>
              </p>
            </div>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 5 ? { ...item, answer: 1 } : item
                  )
                )
              }
              type="radio"
              name="question_five"
              className="form-control"
            />
            <label htmlFor="question_five" className="form-label">
              <span>
                به علت قانون وحدت شتاب، برابر با ثابت زمین و سطح مقطع 176cm است
              </span>
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 5 ? { ...item, answer: 2 } : item
                  )
                )
              }
              type="radio"
              name="question_five"
              className="form-control"
            />
            <label htmlFor="question_five" className="form-label">
              <span>
                به علت قانون وحدت شتاب، برابر با ثابت زمین و سطح مقطع 110cm است
              </span>
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 5 ? { ...item, answer: 3 } : item
                  )
                )
              }
              type="radio"
              name="question_five"
              className="form-control"
            />
            <label htmlFor="question_five" className="form-label">
              <span>
                معلومات مسئله کافی نیست و بردار شتاب وابسته به نیرو تغییر
                جهت/اندازه می دهد و سطح مقطع 20cm است
              </span>
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 5 ? { ...item, answer: 4 } : item
                  )
                )
              }
              type="radio"
              name="question_five"
              className="form-control"
            />
            <label htmlFor="question_five" className="form-label">
              <span>هر چقدر سوال را میخوانم متوجه نمی شوم</span>
            </label>
          </div>
        </div>
        {/* Question 6 */}
        <div className="question">
          <div>
            <label htmlFor="question_sixth" className="question-title">
              فردی در سال 1402 16 سال از اولین شیرخوارگی اش گذشته است، 14 سال
              گذشته چند سال سن داشته است؟
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 6 ? { ...item, answer: 1 } : item
                  )
                )
              }
              type="radio"
              name="question_sixth"
              className="form-control"
            />
            <label htmlFor="question_sixth" className="form-label">
              <span>در آن زمان پا به عرصه وجود نَگذاشته بود</span>
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 6 ? { ...item, answer: 2 } : item
                  )
                )
              }
              type="radio"
              name="question_sixth"
              className="form-control"
            />
            <label htmlFor="question_sixth" className="form-label">
              <span>سن او 9 قرار داشت</span>
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 6 ? { ...item, answer: 3 } : item
                  )
                )
              }
              type="radio"
              name="question_sixth"
              className="form-control"
            />
            <label htmlFor="question_sixth" className="form-label">
              <span>2 سال سن داشته است</span>
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 6 ? { ...item, answer: 4 } : item
                  )
                )
              }
              type="radio"
              name="question_sixth"
              className="form-control"
            />
            <label htmlFor="question_sixth" className="form-label">
              <span>
                دقت بیشتری کردم. با احتساب 9 ماه بارداری و احتساب اضافات ساعات و
                کبیسه بیشتر از 2 سال داشته است
              </span>
            </label>
          </div>
        </div>
        {/* Question 7 */}
        <div className="question">
          <div>
            <label htmlFor="question_seventh" className="question-title">
              Herzlichen Glückwunsch! Du bist ein würdiger Mensch. Ich bin hier,
              um dir, mein Freund, zu helfen, das durchzustehen
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 7 ? { ...item, answer: 1 } : item
                  )
                )
              }
              type="radio"
              name="question_seventh"
              className="form-control"
            />
            <label htmlFor="question_seventh" className="form-label">
              ? Have You Ever Met Ted
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 7 ? { ...item, answer: 2 } : item
                  )
                )
              }
              type="radio"
              name="question_seventh"
              className="form-control"
            />
            <label htmlFor="question_seventh" className="form-label">
              Hören Sie sich die oben genannten Ratschläge an und oben und plus
              dies
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 7 ? { ...item, answer: 3 } : item
                  )
                )
              }
              type="radio"
              name="question_seventh"
              className="form-control"
            />
            <label htmlFor="question_seventh" className="form-label">
              Il gioco non inizia finché non conto fino a tre
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 7 ? { ...item, answer: 4 } : item
                  )
                )
              }
              type="radio"
              name="question_seventh"
              className="form-control"
            />
            <label htmlFor="question_seventh" className="form-label">
              En nombre de la comunidad policial.
            </label>
          </div>
        </div>
        {/* Question 8 */}
        <div className="question">
          <div>
            <label htmlFor="question_eighth" className="question-title">
              وبسایت آموزشیار در دسترس هکران قرار گرفته بود
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 8 ? { ...item, answer: 1 } : item
                  )
                )
              }
              type="radio"
              name="question_eighth"
              className="form-control"
            />
            <label htmlFor="question_eighth" className="form-label">
              تایید می کنم
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 8 ? { ...item, answer: 2 } : item
                  )
                )
              }
              type="radio"
              name="question_eighth"
              className="form-control"
            />
            <label htmlFor="question_eighth" className="form-label">
              قبول ندارم و تبعات آن را می پذیرم
            </label>
          </div>
        </div>
        {/* Question 9 */}
        <div className="question">
          <div>
            <label htmlFor="question_nineth" className="question-title">
              همکاری جدید انجام شده با آقای نیوتون به چه صورت می باشد ؟
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 9 ? { ...item, answer: 1 } : item
                  )
                )
              }
              type="radio"
              name="question_nineth"
              className="form-control"
            />
            <label htmlFor="question_nineth" className="form-label">
              همکاری بصورت حضوری انجام شده
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 9 ? { ...item, answer: 2 } : item
                  )
                )
              }
              type="radio"
              name="question_nineth"
              className="form-control"
            />
            <label htmlFor="question_nineth" className="form-label">
              همکاری غیر حضوری بوده چرا که آقای نیوتون فوت شده اند
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 9 ? { ...item, answer: 3 } : item
                  )
                )
              }
              type="radio"
              name="question_nineth"
              className="form-control"
            />
            <label htmlFor="question_nineth" className="form-label">
              همکاری می تواند به هر صورت انجام شده باشد چرا که افراد افسانه ای
              هرگز نخواهند مرد
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 9 ? { ...item, answer: 4 } : item
                  )
                )
              }
              type="radio"
              name="question_nineth"
              className="form-control"
            />
            <label htmlFor="question_nineth" className="form-label">
              از داده های گفته شده ایشان استفاده غیر مستقیم صورت گرفته
            </label>
          </div>
        </div>
        {/* Question 10 */}
        <div className="question">
          <div>
            <label htmlFor="question_tenth" className="question-title">
              حضرت امام حسین در واقعه مبارکه کربلا به چه آهنگ و با چه هدفونی گوش
              فرا دادند؟
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 10 ? { ...item, answer: 1 } : item
                  )
                )
              }
              type="radio"
              name="question_tenth"
              className="form-control"
            />
            <label htmlFor="question_tenth" className="form-label">
              System Of A Down - Lonely Day | Daewoo
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 10 ? { ...item, answer: 2 } : item
                  )
                )
              }
              type="radio"
              name="question_tenth"
              className="form-control"
            />
            <label htmlFor="question_tenth" className="form-label">
              U2 - With or without you | Sony
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 10 ? { ...item, answer: 3 } : item
                  )
                )
              }
              type="radio"
              name="question_tenth"
              className="form-control"
            />
            <label htmlFor="question_tenth" className="form-label">
              Eminem - Lose Yourself | Samsung
            </label>
          </div>
          <div>
            <input
              onChange={() =>
                setData(
                  data.map((item) =>
                    item.id === 10 ? { ...item, answer: 4 } : item
                  )
                )
              }
              type="radio"
              name="question_tenth"
              className="form-control"
            />
            <label htmlFor="question_tenth" className="form-label">
              Taylor Swift - Welcome To New York | Apple
            </label>
          </div>
        </div>
        {/* Final PART */}
        <div className="">
          <div className="finalstep">
            <button type="submit" className="btn submit">
              ثبت آزمون
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
