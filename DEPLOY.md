# Deploy: GitHub + Vercel

## 1. Push to GitHub

The project is pushed to:

- **origin:** [https://github.com/A7-RD/UC](https://github.com/A7-RD/UC)

## 2. Deploy to Vercel

**Option A – Connect GitHub (recommended)**

1. Go to [vercel.com](https://vercel.com) and sign in (with GitHub).
2. Click **Add New… → Project**.
3. Import the **UC** repository.
4. Leave the defaults (Next.js is auto-detected) and click **Deploy**.

**Option B – Deploy from this folder (CLI)**

```bash
cd "/Users/ashtonhenning/GWTP2/Urbano Cafe"
npx vercel
```

Follow the prompts (login if needed). After the first deploy, use `npx vercel --prod` for production.
