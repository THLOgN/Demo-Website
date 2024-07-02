import {  card2 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const Billing3 = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={card2} alt="billing2" className="w-[90%] h-[70%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Dự án <br className="sm:block hidden" /> Du lịch sinh thái nghỉ dưỡng
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Khu Công Nghiệp Nhơn Trạch 1
      Huyện Nhơn Trạch, Tỉnh Đồng Nai
      Nhà máy chuyên sản xuất đá granite các loại, cung cấp cho các công trình dân dụng, quảng trường …
      </p>
      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default Billing3;
