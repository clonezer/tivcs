# Billing Search	
ระบบบันทึกหมายเลขใบแจ้งหนี้ สำหรับใช้ในการค้นหาใบแจ้งหนี้ที่มีการออกไปแล้ว หรือทำการนับจำนวน "ใบแทน" เมื่อมีการขอออกซ้ำ

# How to
1. **เริ่มใช้งาน**โดยการไปที่หน้าเพจของระบบด้วย URL [http://bit.ly/billing-search](bit.ly/billing-search) ผ่าน Browser ทั้งบน PC หรือ Mobile Device (แนะนำให้เป็น Google Chrome, Firefox, Safari หรือ IE10 ขึ้นไป)
![image](https://raw.githubusercontent.com/clonezer/tivcs/bcfeb79d35da85b51cf381789979bc3d06380253/images/home.png)
2. **ค้นหาหมายเลขใบแจ้งหนี้** โดยกาารกรอก **"เลขที่ใบแจ้งหนี้"**(ตัวเลข 0-9 จำนวน 10 หลัก) ที่ต้องการเพิ่มหรือค้นหา ในช่องว่าง หลังจากนั้นกด **"ค้นหา"**
![image](https://raw.githubusercontent.com/clonezer/tivcs/bcfeb79d35da85b51cf381789979bc3d06380253/images/search.png)
3. **ผลการค้นหา** จะมี 2 ลักษณะ คือ
	1. **พบใบแจ้งหนี้** ระบบจะแสดงหมายเลขใบแจ้งหนี้, วันที่ออก, จำนวนครั้งที่ออกใบแทน และปุ่มเพิ่ม/ลดจำนวนครั้งการออกใบแทน
![image](https://raw.githubusercontent.com/clonezer/tivcs/bcfeb79d35da85b51cf381789979bc3d06380253/images/result_1.png)
	2. **ไม่พบใบแจ้งหนี้** ระบบจะแสดงข้อความสอบถามผู้ใช้ว่าต้องการจะเพิ่ม **"หมายเลขใบแจ้งหนี้"** เข้าไปในระบบด้วยหรือไม่
	![image](https://raw.githubusercontent.com/clonezer/tivcs/bcfeb79d35da85b51cf381789979bc3d06380253/images/result_2.png)
4. **เพิ่มใบแจ้งหนี้** สามารถทำได้ต่อจากข้อ 3.2 โดยการคลิดที่ปุ่ม **"เพิ่มในฐานข้อมูล"** ระบบจะทำการเพิ่มหมายเลขใบแจ้งหนี้และวันที่เพิ่มเข้าไปในระบบอัตโนมัติ พร้อมกับแสดงข้อความว่า **"บันทึกหมายเลข XXXXXXXXXX สำเร็จ"**
![image](https://raw.githubusercontent.com/clonezer/tivcs/bcfeb79d35da85b51cf381789979bc3d06380253/images/added.png)

