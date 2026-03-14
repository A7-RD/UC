# Deploy: GitHub + Vercel

## 1. Push to GitHub

The project is committed locally. The remote is set to:

- **origin:** `https://github.com/A7-RD/urbano-cafe.git`

**If your GitHub username is not `A7-RD`**, update the remote:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/urbano-cafe.git
```

**Create the repo on GitHub:**

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `urbano-cafe` (or any name you prefer)
3. Leave "Add a README" **unchecked** (you already have code)
4. Click **Create repository**

**Then push:**

```bash
cd "/Users/ashtonhenning/GWTP2/Urbano Cafe"
git push -u origin main
```

## 2. Deploy to Vercel

**Option A – Connect GitHub (recommended)**

1. Go to [vercel.com](https://vercel.com) and sign in (with GitHub).
2. Click **Add New… → Project**.
3. Import the `urbano-cafe` (or your repo name) repository.
4. Leave the defaults (Next.js is auto-detected) and click **Deploy**.

**Option B – Deploy from this folder (CLI)**

```bash
cd "/Users/ashtonhenning/GWTP2/Urbano Cafe"
npx vercel
```

Follow the prompts (login if needed). After the first deploy, use `npx vercel --prod` for production.
