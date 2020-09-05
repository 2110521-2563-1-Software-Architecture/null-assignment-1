# Assignment #1: gRPC and REST API Implementation

# 1. Screenshots of Swagger for your APIs in 2.
![](asset/screenshot1.jpg?raw=true)
![](asset/screenshot2.jpg?raw=true)
![](asset/screenshot3.jpg?raw=true)
![](asset/screenshot4.jpg?raw=true)
![](asset/screenshot5.jpg?raw=true)
![](asset/screenshot6.jpg?raw=true)

# 2. Source codes
- [REST API and client](https://github.com/2110521-2563-1-Software-Architecture/null-assignment-1/tree/master/rest-v2)
- [gRPC server and client](https://github.com/2110521-2563-1-Software-Architecture/null-assignment-1/tree/master/grpc)

# 3. Compare how to call the methods based on gRPC and REST API side-by-side.
| Functions  | gRPC                           | REST API                       |
| ---------- | ------------------------------ | ------------------------------ |
| listBook   | listBooks();                   | listBooks();                   |
| insertBook | insertBook(id, title, author); | insertBook(id, title, author); |
| getBook    | getBook(id);                   | getBook(id);                   |
| deleteBook | deleteBook(id);                | deleteBook(id);                |
| watchBooks | watchBooks();                  | -                              |

# 4. What are the main differences between REST API and gRPC?
    ใช้ payload format ที่ไม่เหมือนกัน REST API จะใช้ JSON ในการรับและส่งข้อมูลส่วน gRPC จะใช้ Protobuf แทน ในการส่ง REST API จะใช้ HTTP 1.1 ส่วน gRPC จะใช้ protocol ที่ใหม่กว่า คือ HTTP/2 ในการด้านของใช้งาน gRPC จำเป็นที่จะต้อง setup client ขึ้นมาก่อนจึงจะสามารถ call ได้ แต่จะทำงานได้เร็วกว่า REST API

# 5. What is the benefits of introduce interface in front of the gRPC and REST API of the book services.
    ทำให้สามารถเรียกใช้ API (gRPC, REST) ได้โดยที่เขียนเหมือนกัน กล่าวคือสามารถที่จะ implement ในส่วนของโค้ดที่เรียกใช้ interface ดังกล่าวได้ โดยที่ไม่จำเป็นต้องรู้ว่าเบื้องหลังของ interface ทำงานอย่างไร

# 6. Based on the introduced interface, compare how to call the methods based on gRPC and REST API side-by-side.
| Functions  | gRPC                           | REST API                       |
| ---------- | ------------------------------ | ------------------------------ |
| listBook   | listBooks();                   | listBooks();                   |
| insertBook | insertBook(id, title, author); | insertBook(id, title, author); |
| getBook    | getBook(id);                   | getBook(id);                   |
| deleteBook | deleteBook(id);                | deleteBook(id);                |
| watchBooks | watchBooks();                  | -                              |

# 7. Draw a component diagram representing the book services with and without interfaces.
![](asset/componentDiagram.jpg?raw=true)
# Team Members
- `6031323521`	โรจนณัฐ	คุณากรโอภาส
- `6030352521`	ปพน	ชัยศรีสุขอำพร
- `6030583121`	เศรษฐ์	ภูภักดิ์
- `6030044221`	กาญจนา	เพชรนอก
- `6030665021`	รพีพงศ์	เศรษฐวิพัฒนชัย
- `6030031021`	กษิดิศ	รัตนวงศ์พิทักษ์


