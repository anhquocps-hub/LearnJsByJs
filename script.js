// Dữ liệu bài học và quiz.
const lessons = [
  {
    title: "JavaScript là gì? Tại sao phải dùng",
    sections: [
      {
        title: "JavaScript làm website biết phản hồi",
        problem: "Nếu website là một ngôi nhà thì HTML là kiến trúc ngôi nhà, CSS là lớp sơn, đồ trang trí, còn JavaScript là hệ thống điện nước trong nhà.",
        content: "JavaScript là ngôn ngữ giúp website xử lý hành động của người dùng. Ví dụ: bấm nút đổi nội dung, kiểm tra ô nhập liệu, mở menu, hoặc lấy dữ liệu mới từ server mà không cần tải lại trang.",
        code: "// HTML/CSS dựng sẵn ngôi nhà. JavaScript điều khiển điện nước:\nlet trangThaiDen = 'Đang TẮT';\n\n// Người dùng tương tác (bật công tắc):\ntrangThaiDen = 'Đã BẬT (Ngôi nhà sáng lên!)';\n\nconsole.log('Trạng thái đèn: ' + trangThaiDen);",
        runnableCode: "// HTML/CSS dựng sẵn ngôi nhà. JavaScript điều khiển điện nước:\nlet trangThaiDen = 'Đang TẮT';\n\n// Người dùng tương tác (bật công tắc):\ntrangThaiDen = 'Đã BẬT (Ngôi nhà sáng lên!)';\n\nconsole.log('Trạng thái đèn: ' + trangThaiDen);"
      },
      {
        title: "Tại sao phải dùng JavaScript",
        problem: "Khi bắt đầu học web, bạn có thể thắc mắc: đã có HTML để tạo nội dung và CSS để làm giao diện, vậy tại sao vẫn cần học JavaScript?",
        content: "JavaScript được sử dụng phổ biến nhờ các lí do sau đây",
        methods: [["Nhiều trình duyệt hỗ trợ", "JavaScript chạy sẵn trong hầu hết trình duyệt hiện đại."], ["Số 1 cho Front-end", "Các framework nổi tiếng hiện nay như React, Angular chủ yếu đều dựa vào JavaScript."], ["Hệ sinh thái lớn", "Có nhiều thư viện và công cụ hỗ trợ để làm nhiều tác vụ khác nhau"], ["Dễ bắt đầu", "Không cần setup phức tạp để chạy những ví dụ đầu tiên."]],
        code: "// Các lý do khiến JavaScript được ưa chuộng:\nconst lyDo1 = '1. Chạy trên mọi trình duyệt hiện đại';\nconst lyDo2 = '2. Số 1 cho Front-end (React, Angular...)';\nconst lyDo3 = '3. Hệ sinh thái thư viện cực lớn';\nconst lyDo4 = '4. Rất dễ để bắt đầu học';\n\nconsole.log(lyDo1);\nconsole.log(lyDo2);\nconsole.log(lyDo3);\nconsole.log(lyDo4);",
        runnableCode: "// Các lý do khiến JavaScript được ưa chuộng:\nconst lyDo1 = '1. Chạy trên mọi trình duyệt hiện đại';\nconst lyDo2 = '2. Số 1 cho Front-end (React, Angular...)';\nconst lyDo3 = '3. Hệ sinh thái thư viện cực lớn';\nconst lyDo4 = '4. Rất dễ để bắt đầu học';\n\nconsole.log(lyDo1);\nconsole.log(lyDo2);\nconsole.log(lyDo3);\nconsole.log(lyDo4);"
      }
    ],
    summary: "JavaScript giúp website có hành vi, biết xử lý dữ liệu và phản hồi người dùng."
  },
  {
    title: "Biến và kiểu dữ liệu",
    sections: [
      {
        title: "Biến là chiếc hộp đặt tên",
        problem: "Khi cần nhớ tên người dùng, tuổi, điểm số hoặc trạng thái đăng nhập, bạn cần một nơi để cất dữ liệu.",
        content: "Biến giống một chiếc hộp có nhãn. Dùng const khi dữ liệu không đổi, dùng let khi dữ liệu có thể thay đổi. var là cách cũ, hiện tại ít sử dụng.",
        methods: [["const", "Khai báo biến không gán lại giá trị mới."], ["let", "Khai báo biến có thể gán lại giá trị."], ["var", "Cách khai báo cũ, hiện tại ít dùng hơn let và const."], ["scope", "Phạm vi mà biến có thể được truy cập, ví dụ trong block, function hoặc toàn cục."]],
        code: "const usernameID = 'Quoc123';\nlet score = 8;\n\nif (score >= 8) {\n  let rank = 'Giỏi';\n  console.log(rank);\n}\n\nscore = 9;\nconsole.log(usernameID + ' có điểm ' + score);",
        runnableCode: "const usernameID = 'Quoc123';\nlet score = 8;\n\nif (score >= 8) {\n  let rank = 'Giỏi';\n  console.log('Xếp loại trong scope:', rank);\n}\n\nscore = 9;\nconsole.log(usernameID + ' có điểm ' + score);"
      },
      {
        title: "Primitive type là dữ liệu đơn giản",
        problem: "Máy tính cần biết dữ liệu là loại gì để xử lý đúng cách.",
        content: "Primitive là nhóm dữ liệu đơn giản, bao gồm: string, number, boolean, null, undefined, symbol, bigint. Khi gán primitive sang biến khác, JavaScript thường copy giá trị. Vì vậy đổi biến mới không làm biến cũ thay đổi.",
        methods: [["string", "Chuỗi chữ."], ["number", "Số."], ["boolean", "Đúng hoặc sai."], ["null", "Rỗng có chủ ý."], ["undefined", "Chưa có giá trị."], ["bigint/symbol", "Kiểu đặc biệt, dùng trong trường hợp nâng cao hơn."]],
        code: "// 1. Khai báo các kiểu dữ liệu nguyên thủy (Primitive Type)\nlet str = 'JS Zero';        // String\nlet num = 100;              // Number\nlet bool = true;            // Boolean\nlet empty = null;           // Null\nlet undef = undefined;      // Undefined\n\n// 2. Bản sao giá trị (thay đổi bản sao không ảnh hưởng gốc)\nlet originalNum = 10;\nlet copyNum = originalNum;\ncopyNum = 20;\n\nconsole.log(str, num, bool, empty, undef);\nconsole.log('originalNum:', originalNum);\nconsole.log('copyNum:', copyNum);",
        runnableCode: "// 1. Khai báo các kiểu dữ liệu nguyên thủy (Primitive Type)\nlet str = 'JS Zero';        // String\nlet num = 100;              // Number\nlet bool = true;            // Boolean\nlet empty = null;           // Null\nlet undef = undefined;      // Undefined\n\n// 2. Bản sao giá trị (thay đổi bản sao không ảnh hưởng gốc)\nlet originalNum = 10;\nlet copyNum = originalNum;\ncopyNum = 20;\n\nconsole.log('Các biến primitive:', str, num, bool, empty, undef);\nconsole.log('originalNum vẫn giữ nguyên:', originalNum);\nconsole.log('copyNum đã thay đổi:', copyNum);"
      },
      {
        title: "Reference type là dữ liệu tham chiếu",
        problem: "Primitive type là các kiểu đơn giản như string, number, boolean. Vậy những kiểu còn lại như object, array, function là kiểu dữ liệu gì? \nChúng thuộc Reference type, nghĩa là biến không giữ trực tiếp toàn bộ dữ liệu, mà giữ một tham chiếu trỏ tới dữ liệu đó.",
        content: "",
        methods: [["Reference type", "Object, array, function thường được xử lý theo tham chiếu."], ["Gán bình thường", "Hai biến cùng trỏ tới một dữ liệu."], ["Sao chép nông", "Dùng dấu '=' để copy lớp ngoài."], ["Sao chép sâu", "Dùng structuredClone để copy cả dữ liệu lồng bên trong."], ["Lưu ý", "structuredClone không clone được mọi thứ, ví dụ function."]],
        code: "// 1. Tạo một object 1 tầng\nconst user1 = { name: 'Quốc', age: 20 };\n\n// 2. Gán thông thường (cùng trỏ vào một vùng nhớ)\nconst user2 = user1;\nuser2.name = 'Vỹ'; // Sửa user2 sẽ làm đổi user1 gốc\n\n// 3. Sao chép thực sự (tạo đối tượng mới bằng structuredClone)\nconst userCopy = structuredClone(user1);\nuserCopy.name = 'Nam'; // Đổi userCopy không ảnh hưởng user1\n\nconsole.log(user1);\nconsole.log(user2);\nconsole.log(userCopy);",
        runnableCode: "// 1. Tạo một object 1 tầng\nconst user1 = { name: 'Quốc', age: 20 };\n\n// 2. Gán thông thường (cùng trỏ vào một vùng nhớ)\nconst user2 = user1;\nuser2.name = 'Vỹ'; // Sửa user2 sẽ làm đổi user1 gốc\n\n// 3. Sao chép thực sự (tạo đối tượng mới bằng structuredClone)\nconst userCopy = structuredClone(user1);\nuserCopy.name = 'Nam'; // Đổi userCopy không ảnh hưởng user1\n\nconsole.log('user1 gốc bị đổi tên thành Vỹ:', user1);\nconsole.log('user2 cũng đổi tên tương tự:', user2);\nconsole.log('userCopy là đối tượng mới nên vẫn giữ tên Nam:', userCopy);"
      }
    ],
    summary: "Biến giúp lưu dữ liệu, kiểu dữ liệu giúp JavaScript xử lý thông tin đúng cách."
  },
  {
    title: "Object, Array và Function",
    sections: [
      {
        title: "Object mô tả một thứ có nhiều thông tin",
        problem: "Một học viên không chỉ có tên. Học viên còn có tuổi, điểm, trạng thái học và nhiều hành động khác.",
        content: "Object gom các thông tin liên quan vào cùng một chỗ. Mỗi thông tin gọi là property. Function nằm trong object gọi là method.",
        methods: [["Object.keys()", "Lấy danh sách tên thuộc tính."], ["Object.values()", "Lấy danh sách giá trị."], ["Object.entries()", "Lấy từng cặp key và value."], ["Object.hasOwn()", "Kiểm tra object có property riêng hay không."], ["Destructuring", "Lấy nhanh dữ liệu trong object."], ["this", "Trỏ tới object đang gọi method."]],
        code: "const student = {\n  name: 'Quốc',\n  score: 9,\n  introduce() {\n    return 'Mình là ' + this.name;\n  }\n};\n\nconst { name, score } = student;\nconsole.log(name, score);\nconsole.log(Object.keys(student));\nconsole.log(Object.hasOwn(student, 'score'));\nconsole.log(student.introduce());",
        runnableCode: "const student = {\n  name: 'Quốc',\n  score: 9,\n  introduce() {\n    return 'Mình là ' + this.name;\n  }\n};\n\nconst { name, score } = student;\nconsole.log('Tên và điểm:', name, score);\nconsole.log('Các key:', Object.keys(student));\nconsole.log('Có property score không?', Object.hasOwn(student, 'score'));\nconsole.log(student.introduce());"
      },
      {
        title: "Array lưu danh sách",
        problem: "Danh sách bài học, danh sách sản phẩm, danh sách bình luận đều là nhiều dữ liệu cùng nhóm.",
        content: "Array giúp lưu nhiều phần tử theo thứ tự. Khi làm việc với danh sách, bạn thường cần biến đổi dữ liệu. Vì vậy các method của Array rất quan trọng khi xử lý dữ liệu thực tế.",
        methods: [["map()", "Biến đổi từng phần tử thành mảng mới."], ["filter()", "Lọc các phần tử thỏa điều kiện."], ["find()", "Tìm phần tử đầu tiên phù hợp."], ["push()", "Thêm phần tử vào cuối mảng."], ["unshift()", "Thêm phần tử vào đầu mảng."], ["shift()", "Lấy và xóa phần tử ở đầu mảng."], ["pop()", "Lấy và xóa phần tử ở cuối mảng."], ["includes()", "Kiểm tra có chứa giá trị không."]],
        code: "const scores = [4, 8, 10, 6];\n\nconst doubled = scores.map(score => score * 2);\nconst passed = scores.filter(score => score >= 5);\nconst firstPerfect = scores.find(score => score === 10);\n\nscores.unshift(9);\nscores.push(7);\n\nconst firstScore = scores.shift();\nconst lastScore = scores.pop();\nconst hasTen = scores.includes(10);\n\nconsole.log(doubled);\nconsole.log(passed);\nconsole.log(firstPerfect);\nconsole.log(scores);\nconsole.log(firstScore);\nconsole.log(lastScore);\nconsole.log(hasTen);",
        runnableCode: "const scores = [4, 8, 10, 6];\n\nconst doubled = scores.map(score => score * 2);\nconst passed = scores.filter(score => score >= 5);\nconst firstPerfect = scores.find(score => score === 10);\n\nscores.unshift(9);\nscores.push(7);\n\nconst firstScore = scores.shift();\nconst lastScore = scores.pop();\nconst hasTen = scores.includes(10);\n\nconsole.log('Điểm nhân đôi:', doubled);\nconsole.log('Điểm đạt:', passed);\nconsole.log('Điểm 10 đầu tiên:', firstPerfect);\nconsole.log('Mảng sau khi thêm và lấy phần tử:', scores);\nconsole.log('Phần tử lấy ở đầu:', firstScore);\nconsole.log('Phần tử lấy ở cuối:', lastScore);\nconsole.log('Có điểm 10 không?', hasTen);"
      },
      {
        title: "Function đóng gói một việc",
        problem: "Nếu một việc phải làm nhiều lần, bạn không nên viết lại code lặp đi lặp lại. Đặc biệt:",
        content: "Function là một khối xử lý. Nó có thể nhận dữ liệu đầu vào gọi là tham số, và trả kết quả bằng return.",
        methods: [["Function declaration", "Khai báo function bằng từ khóa function."], ["Function expression", "Gán function vào một biến."], ["Arrow function", "Cách viết function ngắn hơn."], ["Closure", "Function nhớ biến ở phạm vi bên ngoài."]],
        code: "function tinhBinhPhuong(x) {\n  return x * x;\n}\n\nconst tinhTong = function(a, b) {\n  return a + b;\n};\n\nconst tinhBinhPhuongArrow = (x) => x * x;\n\nfunction taoBoDem() {\n  let count = 0;\n  return () => {\n    count += 1;\n    return count;\n  };\n}\n\nconst dem = taoBoDem();\nconsole.log(tinhBinhPhuong(5));\nconsole.log(tinhTong(3, 4));\nconsole.log(tinhBinhPhuongArrow(5));\nconsole.log(dem());\nconsole.log(dem());",
        runnableCode: "function tinhBinhPhuong(x) {\n  return x * x;\n}\n\nconst tinhTong = function(a, b) {\n  return a + b;\n};\n\nconst tinhBinhPhuongArrow = (x) => x * x;\n\nfunction taoBoDem() {\n  let count = 0;\n  return () => {\n    count += 1;\n    return count;\n  };\n}\n\nconst dem = taoBoDem();\nconsole.log('Bình phương (declaration):', tinhBinhPhuong(5));\nconsole.log('Tổng (expression):', tinhTong(3, 4));\nconsole.log('Bình phương (arrow):', tinhBinhPhuongArrow(5));\nconsole.log('Closure - Lần 1:', dem());\nconsole.log('Closure - Lần 2:', dem());"
      },
      {
        title: "Prototype, spread và rest nói đơn giản",
        problem: "Khi học sâu hơn, bạn sẽ gặp các từ nghe hơi khó như prototype, spread, rest. Thật ra chúng đều có ý nghĩa khá đời thường.",
        content: "",
        methods: [["Prototype", "Giống nơi JavaScript để các giá trị khả năng dùng chung của object."], ["Spread", "Dùng dấu ... để trải dữ liệu ra, thường dùng khi sao chép mảng/object"],["Rest", "Cũng dùng dấu ... nhưng để gom phần còn lại vào một biến."]],
        code: "function Dog(name) {\n  this.name = name;\n}\nDog.prototype.bark = function() {\n  return this.name + ' gâu gâu';\n};\nconst myDog = new Dog('Lu');\n\nconst cart = ['Bút', 'Vở'];\nconst newCart = [...cart, 'Sách'];\n\nfunction showGift(first, ...restGifts) {\n  console.log(first);\n  console.log(restGifts);\n}\n\nconsole.log(myDog.bark());\nconsole.log(newCart);\nshowGift('Xe máy', 'Điện thoại', 'Laptop');",
        runnableCode: "function Dog(name) {\n  this.name = name;\n}\nDog.prototype.bark = function() {\n  return this.name + ' gâu gâu';\n};\nconst myDog = new Dog('Lu');\n\nconst cart = ['Bút', 'Vở'];\nconst newCart = [...cart, 'Sách'];\n\nfunction showGift(first, ...restGifts) {\n  console.log('Quà chính:', first);\n  console.log('Quà phụ:', restGifts);\n}\n\nconsole.log('Prototype:', myDog.bark());\nconsole.log('Spread:', newCart);\nshowGift('Xe máy', 'Điện thoại', 'Laptop');"
      }
    ],
    summary: "Object mô tả một thứ, Array lưu danh sách, Function đóng gói hành động. Đây là ba nền tảng cực quan trọng của JavaScript."
  },
  {
    title: "Bất đồng bộ và quản lý lỗi",
    sections: [
      {
        title: "Đồng bộ là làm từng việc theo thứ tự",
        problem: "Trước khi hiểu bất đồng bộ, bạn cần biết đồng bộ là gì. Hãy tưởng tượng bạn xếp hàng mua cà phê: người đầu tiên gọi món xong, trả tiền xong, người sau mới tới lượt.",
        content: "",
        methods: [["Đồng bộ", "Chạy từng dòng theo thứ tự."], ["Dễ hiểu", "Dòng trên chạy xong mới tới dòng dưới."], ["Hạn chế", "Tác vụ lâu có thể làm chương trình phải chờ."], ["Ví dụ thực tế", "Xếp hàng: người trước xong thì người sau mới tiếp tục."]],
        code: "console.log('Bước 1: Chọn món');\nconsole.log('Bước 2: Trả tiền');\nconsole.log('Bước 3: Nhận cà phê');",
        runnableCode: "console.log('Bước 1: Chọn món');\nconsole.log('Bước 2: Trả tiền');\nconsole.log('Bước 3: Nhận cà phê');"
      },
      {
        title: "Bất đồng bộ là không đứng chờ một chỗ",
        problem: "Khi gọi API, tải ảnh hoặc chờ server trả dữ liệu, website phải chờ quá lâu mới có thể làm việc khác nếu chạy code theo thứ tự",
        content: "Bất đồng bộ giúp JavaScript tiếp tục làm việc khác trong lúc chờ kết quả. Promise là lời hứa sẽ có kết quả sau. async/await giúp code bất đồng bộ dễ đọc như từng bước bình thường.",
        code: "console.log('Đặt mua ly cà phê');\n\nconst choCaPhe = new Promise(resolve => {\n  setTimeout(() => {\n    console.log('Cà phê làm xong! ☕');\n    resolve();\n  }, 1000);\n});\n\nconsole.log('Đọc sách trong lúc chờ cà phê');\n\nreturn choCaPhe;",
        runnableCode: "console.log('Đặt mua ly cà phê');\n\nconst choCaPhe = new Promise(resolve => {\n  setTimeout(() => {\n    console.log('Cà phê làm xong! ☕');\n    resolve();\n  }, 1000);\n});\n\nconsole.log('Đọc sách trong lúc chờ cà phê');\n\nreturn choCaPhe;"
      },
      {
        title: "Promise object đại diện cho một tác vụ bất đồng bộ",
        problem: "Khi một việc chưa có kết quả ngay, ví dụ gọi API hoặc chờ tải dữ liệu, JavaScript cần một cách để đại diện cho kết quả trong tương lai.",
        content: "Promise có 3 trạng thái chính: \npending(đang chờ), \nfulfilled(thành công), \nrejected(thất bại). \nKhi Promise thành công, ta xử lý bằng then. \nKhi Promise lỗi, ta xử lý bằng catch.",
        code: "const orderCoffee = new Promise((resolve, reject) => {\n  const hasCoffee = true;\n\n  if (hasCoffee) {\n    resolve('Có cà phê rồi');\n  } else {\n    reject('Hết cà phê');\n  }\n});\n\nreturn orderCoffee\n  .then(message => console.log(message))\n  .catch(error => console.log(error));",
        runnableCode: "const orderCoffee = new Promise((resolve, reject) => {\n  const hasCoffee = true;\n\n  if (hasCoffee) {\n    resolve('Có cà phê rồi');\n  } else {\n    reject('Hết cà phê');\n  }\n});\n\nreturn orderCoffee\n  .then(message => console.log('Thành công:', message))\n  .catch(error => console.log('Lỗi:', error));"
      },
      {
        title: "async/await - cách xử lý bất đồng bộ hiện đại",
        problem: "Promise dùng then/catch rất ổn, nhưng khi có nhiều bước nối tiếp nhau code lại khá rối.",
        content: "async/await là cách viết giúp code bất đồng bộ nhìn giống code đồng bộ hơn.",
        methods: [["async", "Khai báo function bất đồng bộ."], ["await", "Chờ tác vụ hoàn thành."], ["try/catch", "Bắt lỗi khi await tác vụ bị reject."]],
        code: "function datMon(monAn) {\n  return new Promise((resolve, reject) => {\n    if (monAn == 'Cà phê') {\n      setTimeout(() => resolve('Cà phê nóng ☕'), 1000);\n    } else {\n      reject('Hết món ăn này');\n    }\n  });\n}\n\nasync function giaoHang() {\n  try {\n    const ketQua = await datMon('Cà phê');\n    console.log(ketQua);\n  } catch (loi) {\n    console.log(loi);\n  }\n}\n\nreturn giaoHang();",
        runnableCode: "function datMon(monAn) {\n  return new Promise((resolve, reject) => {\n    if (monAn == 'Cà phê') {\n      setTimeout(() => resolve('Cà phê nóng ☕'), 1000);\n    } else {\n      reject('Hết món ăn này');\n    }\n  });\n}\n\nasync function giaoHang() {\n  try {\n    const ketQua = await datMon('Cà phê');\n    console.log('Giao thành công:', ketQua);\n  } catch (loi) {\n    console.log('Giao thất bại:', loi);\n  }\n}\n\nreturn giaoHang();"
      },
      {
        title: "try/catch/finally - xử lý lỗi",
        problem: "Code có thể lỗi vì mất mạng, nhập sai dữ liệu hoặc server trả kết quả không đúng. Nếu không xử lý, người dùng sẽ thấy website hỏng khó hiểu.",
        content: "",
        methods: [["try", "Là nơi chạy code có thể lỗi."], ["catch", "Là nơi bắt lỗi để xử lý."], ["finally", "Luôn chạy dù có lỗi hay không."]],
        code: "try {\n  const user = null;\n  console.log(user.name);\n} catch (error) {\n  console.log('Bắt được lỗi:', error.message);\n} finally {\n  console.log('Hoàn thành kiểm tra');\n}",
        runnableCode: "try {\n  const user = null;\n  console.log(user.name);\n} catch (error) {\n  console.log('Bắt được lỗi:', error.message);\n} finally {\n  console.log('Hoàn thành kiểm tra');\n}"
      }
    ],
    summary: "Bất đồng bộ giúp website không bị đứng, còn try/catch/finally giúp lỗi được xử lý rõ ràng hơn."
  },
  {
    title: "Storage và Cookie",
    sections: [
      {
        title: "Local Storage và Session Storage", //Khi cắt tóc, bạn hỏi cắt kiểu như lần trước, máy tính không hiểu lần trước là lần nào, vậy bạn muốn lần sau chỉ cần bảo cắt như lần trước thì trong js hiển thị ntn
        problem: "Bạn muốn lưu dữ liệu ngay trong trình duyệt thì dùng gì?.",
        content: "localStorage và sessionStorage dùng để lưu dữ liệu dưới dạng các cặp key và value. Dữ liệu trong localStorage tồn tại lâu dài cho đến khi bị xóa, còn sessionStorage sẽ mất khi tab trình duyệt đóng lại.",
        methods: [["localStorage.setItem(key, value)", "Lưu value gắn với key lâu dài vào trình duyệt."], ["localStorage.getItem(key)", "Đọc giá trị đã lưu trong trình duyệt dựa theo key."], ["sessionStorage.setItem(key, value)", "Lưu value gắn với key tạm thời trong tab hiện tại."], ["sessionStorage.getItem(key)", "Đọc giá trị tạm thời dựa theo key."], ["JSON.stringify(value)", "Chuyển đổi đối tượng hoặc mảng thành chuỗi JSON trước khi lưu."], ["JSON.parse(text)", "Chuyển đổi chuỗi JSON đọc được trở lại dạng đối tượng hoặc mảng ban đầu."]],
        code: "const user = { name: 'Quốc', theme: 'dark' };\n\nconst stringified = JSON.stringify(user);\nlocalStorage.setItem('demoUser', stringified);\n\nconst rawData = localStorage.getItem('demoUser');\nconst savedUser = JSON.parse(rawData);\n\nconsole.log(typeof stringified);\nconsole.log(typeof rawData);\nconsole.log(typeof savedUser);\nconsole.log(savedUser.name);",
        runnableCode: "const user = { name: 'Quốc', theme: 'dark' };\n\nconst stringified = JSON.stringify(user);\nlocalStorage.setItem('demoUser', stringified);\n\nconst rawData = localStorage.getItem('demoUser');\nconst savedUser = JSON.parse(rawData);\n\nconsole.log('Kiểu dữ liệu sau khi stringify:', typeof stringified);\nconsole.log('Kiểu dữ liệu lấy từ Storage:', typeof rawData);\nconsole.log('Kiểu dữ liệu sau khi parse:', typeof savedUser);\nconsole.log('Tên người dùng từ object đã khôi phục:', savedUser.name);"
      },
      {
        title: "Cookie lưu trên máy người dùng",
        problem: "Cookie cũng được lưu trong trình duyệt trên máy người dùng. Điểm đặc biệt là cookie có thể được trình duyệt gửi kèm lên server trong mỗi request, ví dụ mã phiên đăng nhập.",
        content: "Cookie là dữ liệu được lưu trên máy người dùng thông qua trình duyệt. Khác với localStorage/sessionStorage, cookie có thể tự động đi kèm request gửi lên server nếu cùng domain và đúng cấu hình.",
        methods: [["document.cookie", "Đọc hoặc ghi cookie ở phía trình duyệt."], ["max-age", "Thời gian sống của cookie tính bằng giây."],],
        code: "document.cookie = 'user=Quoc; max-age=3600; path=/';\ndocument.cookie = 'theme=dark; max-age=3600; path=/';\n\nconsole.log(document.cookie);",
        runnableCode: "document.cookie = 'user=Quoc; max-age=3600; path=/';\ndocument.cookie = 'theme=dark; max-age=3600; path=/';\n\nconsole.log('Tất cả cookie hiện có:', document.cookie);"
      }
    ],
    summary: "Storage giúp lưu dữ liệu ở trình duyệt, có thể thấy dữ liệu bên trong. Cookie thường dùng khi cần làm việc với server, backend hoặc phiên đăng nhập, không thể thấy dữ liệu bên trong ."
  },
  {
    title: "DOM và Event",
    sections: [
      {
        title:"DOM(Document Object Model)",
        problem: "Muốn đổi tiêu đề, thêm class, ẩn hiện nội dung hoặc tạo phần tử mới thì phải làm như thế nào?.",
        content: "DOM là cách JavaScript tương tác với HTML, CSS",
        methods: [["querySelector()", "Chọn phần tử đầu tiên khớp selector."], ["querySelectorAll()", "Chọn nhiều phần tử khớp selector."], ["getElementById()", "Chọn phần tử theo id."], ["createElement()", "Tạo phần tử HTML mới."], ["appendChild()", "Thêm phần tử con vào phần tử cha."], ["textContent", "Đọc hoặc đổi nội dung chữ."], ["classList.add/remove/toggle", "Thêm, xóa hoặc bật/tắt class."], ["remove()", "Xóa phần tử khỏi DOM."]],
        code: "const runner = document.querySelector('.example-runner');\ndocument.getElementById('demo-dom')?.remove();\n\nconst btn = document.createElement('button');\nbtn.id = 'demo-dom';\nbtn.textContent = 'Nút được tạo từ DOM';\nbtn.style.color = '#2563eb';\nrunner.appendChild(btn);",
        runnableCode: "const runner = document.querySelector('.example-runner');\ndocument.getElementById('demo-dom')?.remove();\n\nconst btn = document.createElement('button');\nbtn.id = 'demo-dom';\nbtn.textContent = 'Nút được tạo từ DOM';\nbtn.style.color = '#2563eb';\nrunner.appendChild(btn);\nconsole.log('Đã tạo nút DOM thành công!');"
      },
      {
        title: "Event là chuyện vừa xảy ra trên trang",
        problem: "Người dùng click nút, gõ vào input, gửi form. Website cần biết các chuyện này để phản hồi.",
        content: "Event giúp lắng nghe hành động của người dùng.",
        methods: [["addEventListener()", "Lắng nghe một sự kiện trên phần tử."], ["click", "Sự kiện khi người dùng bấm chuột."], ["input", "Sự kiện khi người dùng nhập dữ liệu."], ["submit", "Sự kiện khi form được gửi."], ["preventDefault()", "Chặn hành vi mặc định của trình duyệt."], ["event.target", "Phần tử đã tạo ra sự kiện."], ["removeEventListener()", "Gỡ một event listener đã gắn trước đó."]],
        code: "const runner = document.querySelector('.example-runner');\ndocument.getElementById('demo-event')?.remove();\n\nconst btn = document.createElement('button');\nbtn.id = 'demo-event';\nbtn.textContent = 'Bấm vào tôi';\n\nbtn.addEventListener('click', () => {\n  btn.textContent = 'Cảm ơn! 🎉';\n  btn.style.color = 'green';\n});\n\nrunner.appendChild(btn);",
        runnableCode: "const runner = document.querySelector('.example-runner');\ndocument.getElementById('demo-event')?.remove();\n\nconst btn = document.createElement('button');\nbtn.id = 'demo-event';\nbtn.textContent = 'Bấm vào tôi';\n\nbtn.addEventListener('click', () => {\n  btn.textContent = 'Cảm ơn! 🎉';\n  btn.style.color = 'green';\n});\n\nrunner.appendChild(btn);\nconsole.log('Đã tạo nút ở dưới, hãy bấm vào nó!');"
      }
    ],
    summary: "DOM cho JavaScript sửa giao diện, Event giúp website phản hồi hành động của người dùng."
  },
  {
    title: "ES Module và npm basic",
    sections: [
      {
        title: "ES Module giúp chia code thành nhiều file",
        problem: "Khi ứng dụng lớn dần, để tất cả code trong một file sẽ rất rối và khó sửa.",
        content: "ES Module cho phép export phần cần dùng từ một file và import ở file khác. Cách này giống chia vở học thành từng chương: dễ tìm, dễ sửa, dễ tái sử dụng.",
        code: "// math.js\n// export function sum(a, b) { return a + b; }\n\n// main.js\n// import { sum } from './math.js';\n\nfunction sum(a, b) {\n  return a + b;\n}\n\nconsole.log(sum(2, 3));",
        runnableCode: "function sum(a, b) {\n  return a + b;\n}\n\nconsole.log('Kết quả giả lập import:', sum(2, 3));"
      },
      {
        title: "npm là kho công cụ của JavaScript",
        problem: "Bạn không cần tự viết mọi thứ từ đầu. Có rất nhiều thư viện đã được cộng đồng viết sẵn.",
        content: "npm giúp cài package, chạy script và quản lý dependency.",
        methods: [["package.json", "File mô tả project: tên, phiên bản, scripts và các thư viện đang dùng."], ["npm install", "Cài các package được ghi trong package.json hoặc cài thêm package mới."], ["npm install <package>", "Cài một thư viện cụ thể, ví dụ npm install vite."], ["npm run dev", "Chạy script dev được khai báo trong package.json."], ["node_modules", "Thư mục chứa code của các package đã cài."]],
        code: "// Ví dụ trong terminal:\n// npm init -y\n// npm install vite\n// npm run dev\n\nconst packageName = 'vite';\nconsole.log('Có thể cài package bằng npm install ' + packageName);",
        runnableCode: "const packageName = 'vite';\nconsole.log('Có thể cài package bằng npm install ' + packageName);"
      }
    ],
    summary: "ES Module giúp chia code gọn hơn. npm giúp dùng thư viện và quản lý project JavaScript chuyên nghiệp hơn."
  }
];
const quizQuestions = [
  {
    question: "JavaScript giúp website làm gì?",
    options: ["Xử lý tương tác và dữ liệu", "Chỉ đổi font chữ", "Chỉ tạo file ảnh"],
    answer: 0
  },
  {
    question: "Khi giá trị có thể thay đổi, nên dùng từ khóa nào?",
    options: ["let", "const", "import"],
    answer: 0
  },
  {
    question: "Array phù hợp nhất để lưu kiểu dữ liệu nào?",
    options: ["Danh sách nhiều phần tử", "Một màu nền", "Một file CSS"],
    answer: 0
  },
  {
    question: "Object dùng để làm gì?",
    options: ["Gom nhiều thông tin liên quan", "Chỉ để chạy vòng lặp", "Chỉ để lưu số"],
    answer: 0
  },
  {
    question: "try/catch dùng để làm gì?",
    options: ["Bắt và xử lý lỗi", "Tạo thẻ HTML", "Cài package"],
    answer: 0
  },
  {
    question: "localStorage thường dùng để làm gì?",
    options: ["Lưu dữ liệu trong trình duyệt", "Tạo server", "Xóa toàn bộ CSS"],
    answer: 0
  },
  {
    question: "DOM giúp JavaScript làm việc với phần nào?",
    options: ["Phần tử HTML trên trang", "Ổ cứng máy tính", "Tên package npm"],
    answer: 0
  },
  {
    question: "Event click xảy ra khi nào?",
    options: ["Người dùng bấm vào phần tử", "Trang bị tắt", "CSS đổi màu"],
    answer: 0
  },
  {
    question: "ES Module dùng để làm gì?",
    options: ["Chia code thành nhiều file và import/export", "Chỉ lưu cookie", "Chỉ viết comment"],
    answer: 0
  },
  {
    question: "Bạn đã hiểu hết về JavaScript chưa?",
    options: ["Chưa, cần luyện tập thêm", "Rồi, không cần học nữa", "Hiểu sơ sơ"],
    answer: 0
  }
];
const state = {
  activeLesson: 0,
  activeSection: 0,
  quizIndex: 0,
  quizScore: 0,
  shuffledOptions: []
};

const lessonListElement = document.querySelector("[data-lesson-list]");
const lessonDetailElement = document.querySelector("[data-lesson-detail]");
const lessonModal = document.querySelector("[data-lesson-modal]");
const searchInput = document.querySelector("[data-search]");
const quizBox = document.querySelector("[data-quiz-box]");

// Render giao diện từ dữ liệu để dễ mở rộng bài học sau này.
function renderLessonList(keyword = "") {
  const normalizedKeyword = keyword.trim().toLowerCase();
  const filteredLessons = lessons
    .map((lesson, index) => ({ ...lesson, index }))
    .filter(lesson => lesson.title.toLowerCase().includes(normalizedKeyword));

  lessonListElement.innerHTML = filteredLessons
    .map(lesson => {

      return `
        <button class="lesson-button" type="button" data-lesson-index="${lesson.index}">
          <span class="lesson-card-content">
            <strong>Bài ${lesson.index + 1}</strong>
            <span>${lesson.title}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderLessonDetail() {
  const lesson = lessons[state.activeLesson];
  const lessonSections = getLessonSections(lesson);
  const activeSectionIndex = Math.min(state.activeSection, lessonSections.length - 1);
  const section = lessonSections[activeSectionIndex];
  const methodList = section.methods
    ? `
      <div class="method-grid">
        ${section.methods.map(([name, description]) => `
          <article>
            <code>${name}</code>
            <p>${description}</p>
          </article>
        `).join("")}
      </div>
    `
    : "";

  lessonDetailElement.innerHTML = `
    <h2>Bài ${state.activeLesson + 1}: ${lesson.title}</h2>
    
    <div class="section-actions">
      <button class="button ghost" type="button" data-prev-section ${activeSectionIndex === 0 ? "disabled" : ""}>Bảng trước</button>
      <button class="button ghost" type="button" data-next-section ${activeSectionIndex === lessonSections.length - 1 ? "disabled" : ""}>Bảng sau</button>
    </div>

    <section class="lesson-section">
      <div class="lesson-section-head">
        <span>Bảng ${activeSectionIndex + 1}/${lessonSections.length}</span>
        <h3>${section.title}</h3>
      </div>

      <div class="lesson-block">
        <h4>Đặt vấn đề</h4>
        <p>${section.problem}</p>
      </div>

      <div class="lesson-block">
        <h4>Nội dung</h4>
        <p>${section.content}</p>
        ${methodList}
      </div>

      <div class="lesson-block">
        <h4>Ví dụ code</h4>
        <pre><code>${escapeHtml(section.code)}</code></pre>
        <div class="example-runner">
          <button class="button primary" type="button" data-run-example data-section-index="${activeSectionIndex}">Run Code</button>
          <pre data-example-output="${activeSectionIndex}">Kết quả sẽ hiển thị ở đây.</pre>
        </div>
      </div>
    </section>

    <h3>Tóm tắt</h3>
    <p>${lesson.summary}</p>
    <div class="lesson-actions">
      <button class="button ghost" type="button" data-prev-lesson>Bài trước</button>
      <button class="button ghost" type="button" data-next-lesson>Bài sau</button>
    </div>
  `;
}

function setActiveLesson(index) {
  state.activeLesson = Math.min(Math.max(index, 0), lessons.length - 1);
  state.activeSection = 0;
  renderLessonList(searchInput.value);
  renderLessonDetail();
}


function setActiveSection(index) {
  const lessonSections = getLessonSections(lessons[state.activeLesson]);
  state.activeSection = Math.min(Math.max(index, 0), lessonSections.length - 1);
  renderLessonDetail();
}
function openLessonModal() {
  lessonModal.classList.add("open");
  lessonModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeLessonModal() {
  lessonModal.classList.remove("open");
  lessonModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}


// Tương tác thực hành code, quiz và menu mobile.
async function executeCode(code, outputTarget) {
  const logs = [];
  const originalConsoleLog = console.log;
  const originalAlert = window.alert;

  try {
    console.log = (...args) => {
      logs.push(args.map(item => (typeof item === "object" ? JSON.stringify(item, null, 2) : String(item))).join(" "));
    };

    window.alert = message => {
      logs.push(`alert: ${message}`);
    };

    const execute = new Function(code);
    await execute();
    outputTarget.textContent = logs.length ? logs.join("\n") : "Code đã chạy xong nhưng không có console.log.";
  } catch (error) {
    outputTarget.textContent = `Lỗi: ${error.message}`;
  } finally {
    console.log = originalConsoleLog;
    window.alert = originalAlert;
  }
}

function getLessonSections(lesson) {
  return lesson.sections || [
    {
      title: lesson.title,
      problem: lesson.problem,
      content: lesson.theory,
      code: lesson.code,
      runnableCode: lesson.runnableCode,
      methods: lesson.methods
    }
  ];
}

function runLessonExample(sectionIndex) {
  const lesson = lessons[state.activeLesson];
  const section = getLessonSections(lesson)[sectionIndex];
  const outputTarget = lessonDetailElement.querySelector(`[data-example-output="${sectionIndex}"]`);

  outputTarget.textContent = "Đang chạy code...";
  executeCode(section.runnableCode || section.code, outputTarget);
}


function shuffleOptions(question) {
  return question.options
    .map((option, index) => ({ option, isCorrect: index === question.answer }))
    .sort(() => Math.random() - 0.5);
}
function renderQuiz() {
  const currentQuestion = quizQuestions[state.quizIndex];

  if (!currentQuestion) {
    quizBox.innerHTML = `
      <h3>Kết quả: ${state.quizScore}/${quizQuestions.length}</h3>
      <p>Chúc mừng, bạn đã hoàn thành bài quiz</p>
      <button class="button primary" type="button" data-restart-quiz>Làm lại quiz</button>
    `;
    return;
  }

  state.shuffledOptions = shuffleOptions(currentQuestion);

  quizBox.innerHTML = `
    <p class="eyebrow">Câu ${state.quizIndex + 1}/${quizQuestions.length}</p>
    <h3>${currentQuestion.question}</h3>
    <div class="quiz-options">
      ${state.shuffledOptions.map((item, index) => `<button type="button" data-answer="${index}">${item.option}</button>`).join("")}
    </div>
  `;
}

function answerQuiz(selectedIndex, button) {
  const selectedOption = state.shuffledOptions[selectedIndex];
  const isLastQuestion = state.quizIndex === quizQuestions.length - 1;
  const isCorrect = isLastQuestion || Boolean(selectedOption && selectedOption.isCorrect);

  button.classList.add(isCorrect ? "correct" : "wrong");

  if (!isCorrect) {
    setTimeout(() => {
      button.classList.remove("wrong");
    }, 650);
    return;
  }

  state.quizScore += 1;

  setTimeout(() => {
    state.quizIndex += 1;
    renderQuiz();
  }, 650);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.querySelector("[data-menu-button]").addEventListener("click", () => {
  document.querySelector("[data-mobile-menu]").classList.toggle("open");
});

document.querySelector("[data-mobile-menu]").addEventListener("click", event => {
  if (event.target.matches("a")) {
    document.querySelector("[data-mobile-menu]").classList.remove("open");
  }
});

lessonListElement.addEventListener("click", event => {
  const button = event.target.closest("[data-lesson-index]");

  if (button) {
    setActiveLesson(Number(button.dataset.lessonIndex));
    openLessonModal();
  }
});

lessonDetailElement.addEventListener("click", event => {

  if (event.target.matches("[data-run-example]")) {
    runLessonExample(Number(event.target.dataset.sectionIndex));
  }

  if (event.target.matches("[data-prev-section]")) {
    setActiveSection(state.activeSection - 1);
  }

  if (event.target.matches("[data-next-section]")) {
    setActiveSection(state.activeSection + 1);
  }

  if (event.target.matches("[data-prev-lesson]")) {
    setActiveLesson(state.activeLesson - 1);
  }

  if (event.target.matches("[data-next-lesson]")) {
    setActiveLesson(state.activeLesson + 1);
  }
});


lessonModal.addEventListener("click", event => {
  if (event.target.matches("[data-close-modal]")) {
    closeLessonModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && lessonModal.classList.contains("open")) {
    closeLessonModal();
  }
});
searchInput.addEventListener("input", event => {
  renderLessonList(event.target.value);
});

quizBox.addEventListener("click", event => {
  const answerButton = event.target.closest("[data-answer]");

  if (answerButton) {
    answerQuiz(Number(answerButton.dataset.answer), answerButton);
  }

  if (event.target.matches("[data-restart-quiz]")) {
    state.quizIndex = 0;
    state.quizScore = 0;
    state.shuffledOptions = [];
    renderQuiz();
  }
});

renderLessonList();
renderLessonDetail();
renderQuiz();
























