# ⏵ Prisma ORM MongoDB Sandbox

This repository is a learning sandbox dedicated to modeling databases using the **Prisma Object-Relational Mapper** connected to a **MongoDB** database.

---

## 📂 Sub-Projects

### 1. Banking Systems (`Banking systems/`)
* Prisma schemas describing banking entities: User Accounts, virtual Wallets, and Transaction histories.
* Models relations between digital credit nodes.

### 2. Factory Management (`factory-management/`)
* Complex schema modeling relationships:
  * **Factory** has many **Workers** and many **Machines**.
  * **Worker** belongs to **Factory**.
  * **Machine** belongs to **Factory**.
* Utilizes MongoDB ObjectIDs (`@db.ObjectId`) and automatic auto-incrementing mappings.

---

## 🚀 Usage
1. Open the `factory-management` directory and configure your `DATABASE_URL` inside your `.env`.
2. Generate the Prisma Client:
   ```bash
   npx prisma generate
   ```
3. Push your schema to MongoDB:
   ```bash
   npx prisma db push
   ```
