const transErrorsVi = {
  account_login_incorrect: "Tài khoản hoặc mật khẩu không chính xác",
  email_not_found: "Không tìm thấy email, vui lòng kiểm tra lại thông tin",
  account_in_use: "User này đã được sử dụng",
  email_is_exist: "Email này đã tồn tại",
  account_removed:
    "Tài khoản này đã bị dỡ khỏi hệ thống, nếu cho rằng đây là hiêu lầm, vui lòng liên hệ với bộ phần hỗ  trợ của chúng tôi.",
  account_not_active:
    "Email đã đăng ký nhưng chưa được Active tài khoản, vui lòng kiểm tra email hoặc liên hệ với bộ phần hỗ trợ của chúng tôi.",
  account_undefined: "Tài khoản này không tồn tại.",
  token_undefined: "Token không tồn tại!",
  signin_failed: "Sai tài khoản hoặc mật khẩu!",
  server_error: "Có lỗi phía server",
};

const transSuccessVi = {
  userCreated: (userEmail) => {
    return `Tài khoản ${userEmail} đã được tạo, kiểm tra email Active tài khoản trước khi đăng nhập, cảm ơn`;
  },
  account_actived:
    "Kích hoạt tài khoản thành công, bạn đã có thể đăng nhập ứng dụng.",
  loginSuccess: (username) => {
    return `Xin chào ${username}, chúc bạn một ngày tốt lành.`;
  },
  send_reset_password_success:
    "Gửi mail reset mật khẩu thành công, vui lòng kiểm tra mail",
  user_password_updated: "Cập nhật mật khẩu thành công.",
};

const transMailVi = {
  subject: "Lotto Cinema: xác nhận đăng ký tài khoản.",
  template: (linkVerify) => {
    return `
       <h2>Bạn nhận được email này vì đăng ký ứng dụng Lotto Cinema.</h2>
       <h3>Vui lòng click vào liên kết bên dưới để xác nhận tài khoản.</h3>
       <h3><a href="${linkVerify}" target="blank">${linkVerify}</a></h3>
       <h4>Nếu tin rằng đây là nhầm lẫn, hãy bỏ qua nó. Cảm ơn.</h4>
   `;
  },
  send_failed:
    "Có lỗi trong quá trình gửi email, vui lòng liên hệ với bộ phận hỗ  trợ của chúng tôi.",
};

module.exports = { transErrorsVi, transSuccessVi, transMailVi };
