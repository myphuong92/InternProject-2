<template>
  <main class="container">
    <div class="p-[20px] md:p-[40px] lg:px-[100px] lg:pt-[100px] lg:pb-[70px]">
            <p class="text-heading text-7xl text-[#F16336] uppercase">Liên hệ</p>
        </div>
        <div class="md:flex md:flex-row whitespace-nowrap	md:whitespace-normal overflow-x-scroll md:overflow-auto justify-around px-4 md:px-0 py-8 bg-[#E4E4E4] uppercase text-[#686868] text-lg md:text-2xl">
            <a style="font-family: 'Big Shoulders Stencil Text', sans-serif;" class=" " href="">CÔNG Ty PHÚ TÀI</a>
            <a style="font-family: 'Big Shoulders Stencil Text', sans-serif;" class="ml-5" href="">NGÀNH ĐÁ TỰ NHIÊN</a>
            <a style="font-family: 'Big Shoulders Stencil Text', sans-serif;" class="ml-5" href="">NGÀNH ĐỒ GỖ</a>
            <a style="font-family: 'Big Shoulders Stencil Text', sans-serif;" class="ml-5" href="">NGÀNH Ô TÔ</a>
        </div>
    <section>
        <div class="responsive-section grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="content flex flex-col gap-8 leading-loose justify-center order-last md:order-first">
                <p class="text-sub-heading text-4xl text-[#003366]">Công ty cổ phần Phú Tài</p>
                <div class="desc text-[#526D88] text-lg md:pl-10">
                    <cardTextIcon :cards="contact" />

                </div>
            </div>
            <div class="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4403542014984!2d106.652929473775!3d10.777546159175662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2264a57a65%3A0xf808a6ff21488797!2sC%C3%B4ng%20ty%20TNHH%20PIZITECH!5e0!3m2!1sen!2s!4v1704765008705!5m2!1sen!2s" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                            
            </div>
        </div>
    </section>
    <section>
        <div class="responsive-section">
            <div class="grid grid-cols-1 gap-8 md:gap-10 divide-y-2 divide-gray-500">
                <div class="set-contact">
                    <p style="font-family: 'Big Shoulders Display', sans-serif;" class="text-4xl text-[#003366] font-bold uppercase">Liên hệ mua hàng</p>
                    <div class="grid grid-cols-1 divide-y-2 divide-gray-500">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 pt-10 ">
                            <p class="title text-3xl">Mua sản phẩm Đá</p>
                            <div class="grid grid-cols-1 divide-y-2 divide-gray-500 lg:col-span-2">
                                <div class="grid grid-cols-1 md:grid-cols-3 pb-6 gap-3 md:gap-0">
                                    <p class="category text-base">Nội địa</p>
                                    <div class="desc grid grid-cols-1">
                                        <p>Điện thoại:</p>
                                        <p>0256 3841 300 (máy nhánh: 129 , 130)</p>
                                    </div>
                                    <div class="desc grid grid-cols-1">
                                        <p>Email:</p>
                                        <p>kinhdoanh@phutai380.com</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 py-6 gap-3 md:gap-0">
                                    <p class="category text-base">Xuất khẩu</p>
                                    <div class="desc grid grid-cols-1">
                                        <p>Điện thoại:</p>
                                        <p> 0256 3841 300 ( máy nhánh: 131) hoặc 0256 3741 699</p>
                                    </div>
                                    <div class="grid grid-cols-1">
                                        <p>Email:</p>
                                        <p>sales@phutai380.com, info@phutai380.com</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 py-6 gap-3 md:gap-0">
                                    <p class="category text-base">Kế Toán</p>
                                    <div class="desc grid grid-cols-1">
                                        <p>Điện thoại:</p>
                                        <p>0256 3841 300 ( máy nhánh: 134,135,136)</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 pt-10">
                            <p class="title text-3xl">Mua sản phẩm Gỗ</p>
                            <div class="grid grid-cols-1 divide-y-2 divide-gray-500 col-span-2">
                                <div class="grid grid-cols-1 md:grid-cols-3 pb-6 gap-3 md:gap-0">
                                    <p class="category text-base">Xí nghiệp Thắng Lợi Xuất khẩu</p>
                                    <div class="desc grid grid-cols-1">
                                        <p>Điện thoại:</p>
                                        <p>0256 3577 054</p>
                                    </div>
                                    <div class="desc grid grid-cols-1">
                                        <p>Email: </p>
                                        <p>thangloipt@dng.vnn.vn hoặc</p>
                                        <p>phuonghuynhptb.tl@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 pt-10">
                            <p class="title text-3xl leading-relaxed">Mua sản phẩm <br>Xe ô tô</p>
                            <div class="grid grid-cols-1 divide-y-2 divide-gray-500 col-span-2">
                                <div class="grid grid-cols-1 md:grid-cols-3 pb-6 gap-3 md:gap-0">
                                    <p class="category text-base">Toyota Đà Nẵng <br>Duy Tân</p>
                                    <div class="desc grid grid-cols-1">
                                        <p>Điện thoại: <span class="phone">0256 3577 054</span></p>
                                        <p>Fax: <span class="fax-number">0236.3630111</span></p>
                                    </div>
                                    <div></div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 py-6 gap-3 md:gap-0">
                                    <p class="category text-base">Toyota Đà Nẵng Lê <br>Đình Lý</p>
                                    <div class="desc grid grid-cols-1">
                                        <p>Điện thoại: <span class="phone">0256 3577 054</span></p>
                                        <p>Fax: <span class="fax-number">0236.3630111</span></p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 py-6 gap-3 md:gap-0">
                                    <p class="category text-base">Toyota Bình Định</p>
                                    <div class="desc grid grid-cols-1">
                                        <p>Điện thoại: <span class="phone">02563.946717</span></p>
                                        <p>Hotline: <span class="hotline">0965.786.743</span></p>
                                        <p>Cứu hộ: <span class="emergency">0967.82 48 48</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-5 contact-form pt-10 md:pt-20">
                    <div class="flex flex-col gap-5">
                        <p style="font-family: 'Big Shoulders Display', sans-serif;" class="text-4xl text-[#003366] font-bold uppercase">liên hệ với chúng tôi</p>
                        <p class="text-sm italic">Nếu bạn có câu hỏi xin vui lòng điền thông tin và gửi cho chúng tôi. Chúng tôi sẽ liên lạc với bạn ngay.</p>
                    </div>
                    <div class="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="grid grid-cols-1">
                            <p>Họ và Tên<span class="required">*</span></p>
                            <input type="text">
                        </div>
                        <div class="grid grid-cols-1">
                            <p>Địa chỉ<span class="required">*</span></p>
                            <input type="text">
                        </div>
                        <div class="grid grid-cols-1">
                            <p>E-mail<span class="required">*</span></p>
                            <input type="email">
                        </div>
                        <div class="grid grid-cols-1">
                            <p>Số điện thoại<span class="required">*</span></p>
                            <input type="number">
                        </div>
                        <div class="md:col-span-2 grid  grid-cols-1">
                            <p>Nội dung<span class="required">*</span></p>
                            <input type="text">
                        </div>
                    </div>
                    <buttonComp class="w-full md:w-1/3 lg:w-1/2 lg:col-start-2 lg:mt-8" title="Gửi nội dung" icon="arrow_forward" changeColor="darkblue"/>


                </div>
                
            </div>
            
        </div>
    </section>
  </main>
</template>

<script setup>
import cardTextIcon from "../components/cardTextIcon.vue";
import { ref } from "vue";
import buttonComp from '../components/buttonComp.vue'
const contact = ref([
  {
    rows: [
      {
        items: [
          { icon: "apartment", desc: "278 Nguyễn Thị Định, P. Nguyễn Văn Cừ, TP. Qui Nhơn, Tỉnh Bình Định" },
        ],
      },
      
      {items: [{ icon: "call", desc: "0256 3847668" }]},
      { items: [{ icon: "fax", desc: "0256 3847556" }] },

      { items: [{ icon: "mail", desc: "sales@phutai.com.vn" }] },
      { items: [{ icon: "public", desc: "phutai@phutai.com.vn" }] },

    ],
  },
]);

</script>

<style scoped>
.set-contact .title{
    font-weight: 300;
    color: #003366;
}
.set-contact .category{
    font-weight: 700;
    color: #001933;
}
.contact-form input{
    padding: 8px;
    background-color: transparent;
    border-bottom: 2px solid black;
}
</style>