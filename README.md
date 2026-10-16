# Software Testing Final Exam - Playwright (SauceDemo)

- ชื่อ-นามสกุล: <วรินยุพา สอนอำคา >
- รหัสนักศึกษา: <6804101381>
- ระบบที่ทดสอบ: https://www.saucedemo.com/
- เครื่องมือ: Playwright Test (TypeScript)

## วิธีรันการทดสอบ
npm install
npx playwright test
npx playwright show-report

## รายการทดสอบ
| รหัส | ไฟล์ | ชื่อ Test |
|---|---|---|
| UT-01 | tests/unit/UT-01.spec.ts | Login Form Validation (3 test cases) |
| UT-02 | tests/unit/UT-02.spec.ts | Product Button State |
| IT-01 | tests/integration/IT-01.spec.ts | Top-Down with Stub |
| IT-02 | tests/integration/IT-02.spec.ts | Bottom-Up with Driver |
| ST-01 | tests/system/ST-01.spec.ts | Complete Purchase Flow |
| ST-02 | tests/system/ST-02.spec.ts | Checkout Validation and Recovery |

## IT-01: Top-Down Integration (Stub)
- **Real:** การ Login ผ่านหน้าเว็บ SauceDemo จริง และการตรวจสอบ URL inventory.html
- **Stub:** หน้า Inventory ที่จำลองด้วย `page.setContent()` แสดงข้อความ
  "Mock Inventory Ready" และสินค้าจำลอง 2 รายการ (Mock Backpack, Mock Bike Light)
- Stub นี้จำลอง DOM ระดับ Browser หลัง Login จริง
  ไม่ได้แทน Internal Module ของ SauceDemo

## IT-02: Bottom-Up Integration (Driver)
- **Driver:** ฟังก์ชัน `driverOpenInventory()` ทำหน้าที่เตรียมสถานะ Login
  โดยตั้ง Cookie `session-username` = `standard_user` ด้วย `BrowserContext.addCookies()`
  แล้วเปิด `inventory.html` โดยตรง ไม่ผ่าน Login Form
- **Real:** หน้า Inventory (6 สินค้า), การเพิ่มสินค้าลงตะกร้า, Cart Badge และหน้า Shopping Cart ของ SauceDemo จริง

## หมายเหตุ
บทที่ 1 เป็น UI Component/Functional Testing แบบ Black-box
เนื่องจากไม่สามารถเข้าถึง Source Code ภายในของ SauceDemo