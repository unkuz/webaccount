import ArrowFaqIcon from '@/assets/svgs/arrow-faq-icon.svg'
import Image from 'next/image'

const listFAQ = [
  {
    q: 'Tài khoản Premium là gì?',
    a: `Tài khoản Premium là loại tài khoản trả phí cung cấp các tính năng và lợi ích bổ sung so với tài khoản miễn phí. Ví dụ, tài khoản Spotify Premium cho phép bạn nghe nhạc không có quảng cáo, tải nhạc xuống để nghe ngoại tuyến và bỏ qua bài hát không giới hạn.
    `,
  },
  {
    q: 'Chúng tôi có uy tín không? Tại sao bạn nên lựa chọn chúng tôi !',
    a: ` Mặc dù mới kinh doanh hoạt động không lâu since 2024, nhưng bạn có thể hoàn toàn yên tâm về độ uy tín của chúng tôi!. Chúng tôi cam kết cung cấp cho khách hàng:
    <br/>
    - Tài khoản Premium chất lượng cao: Tất cả các tài khoản Premium mà chúng tôi cung cấp đều được tuyển chọn kỹ lưỡng, đảm bảo hoạt động ổn định, không bị gián đoạn và có thời hạn sử dụng lâu dài.
     <br/>
    - Chúng tôi luôn mang đến cho khách hàng những mức giá cạnh tranh nhất trên thị trường. Chúng tôi thường xuyên có các chương trình khuyến mãi hấp dẫn để tri ân khách hàng.
    <br/>
    - Đa dạng các loại tài khoản: Chúng tôi cung cấp đa dạng các loại tài khoản Premium cho các dịch vụ như Spotify, Youtube, Netflix, Elsa, Duolingo, Google One,...Chúng tôi luôn cập nhật các tài khoản mới nhất để đáp ứng nhu cầu đa dạng của khách hàng.
    <br/>
    - Dịch vụ khách hàng chuyên nghiệp: Chúng tôi sở hữu đội ngũ nhân viên hỗ trợ khách hàng chuyên nghiệp, nhiệt tình, luôn sẵn sàng giải đáp mọi thắc mắc và hỗ trợ khách hàng trong suốt quá trình sử dụng dịch vụ.
     <br/>
    - Chính sách đổi trả và hoàn tiền rõ ràng: Chúng tôi có chính sách đổi trả và hoàn tiền rõ ràng, minh bạch để đảm bảo quyền lợi của khách hàng.`,
  },

  {
    q: 'Tôi có thể liên hệ với ai để được hỗ trợ?',
    a: `Bạn có thể liên hệ với chúng tôi qua Facebook, Zalo nếu bạn cần hỗ trợ.`,
  },
]

const FAQPage = () => {
  return (
    <div>
      <h2 className="text-[25px] font-bold">Câu hỏi thường gặp</h2>
      <div className="mt-[30px] flex flex-col gap-[15px]">
        {listFAQ.map(({ a, q }, idx) => (
          <div key={idx}>
            <div className="text-[22px] font-bold">
              <Image
                src={ArrowFaqIcon}
                alt=""
                className="mr-[10px] inline-block w-[30px] select-none"
              />
              <span className="text-pretty">{q}</span>
            </div>
            <div
              className="text-[18px] font-bold text-[#747474]"
              dangerouslySetInnerHTML={{ __html: a }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQPage
