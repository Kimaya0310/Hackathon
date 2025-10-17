# ⚡ Smart AutoSense - Quick Start Guide

Get Smart AutoSense running in 5 minutes!

## 🚀 Fastest Way to Start

### Windows Users
```bash
# Double-click this file:
start_all.bat
```

That's it! Both servers will start automatically.

---

## 📋 Manual Setup (All Platforms)

### Step 1: Backend (2 minutes)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate

pip install -r requirements.txt
python app.py
```

✅ Backend running on `http://localhost:5000`

### Step 2: Frontend (2 minutes)

```bash
# Open a NEW terminal
cd frontend
npm install
npm start
```

✅ Frontend running on `http://localhost:3000`

---

## ✅ Verify It's Working

1. Browser opens to `http://localhost:3000`
2. You see the Smart AutoSense dashboard
3. Numbers update every 3 seconds
4. Red "LIVE" indicator pulses in top-right
5. Wait ~10 seconds for fault alerts to appear

---

## 🎯 What You'll See

### Dashboard Tab
- 🚗 Real-time vehicle data
- 🌡️ Engine temperature
- 🔋 Battery voltage
- 🛞 Tire pressure (visual)
- 🛢️ Oil level

### Service Centers Tab
- 📍 Nearby service centers
- ⭐ Ratings and distances
- 📞 Contact information

### Community Tab
- 💬 Discussion forums
- 💡 Tips and guides
- 🤝 Community support

---

## 🐛 Troubleshooting

### "Python not found"
→ Install Python from [python.org](https://www.python.org/downloads/)

### "npm not found"
→ Install Node.js from [nodejs.org](https://nodejs.org/)

### "Port 5000/3000 already in use"
→ Close other applications using these ports

### "CORS errors in browser"
→ Make sure backend is running on port 5000

### Data not updating
→ Check both terminals are running
→ Refresh browser (Ctrl+Shift+R)

---

## 🎬 Ready to Demo?

See `DEMO_GUIDE.md` for a complete presentation script!

---

## 📚 More Help

- **Full Setup Guide**: See `SETUP_GUIDE.md`
- **Project Info**: See `README.md`
- **Demo Tips**: See `DEMO_GUIDE.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`

---

## 🎉 You're Ready!

Your Smart AutoSense MVP is running. Now go impress those judges! 🚗✨

**Need help?** Check the troubleshooting section or review the detailed guides.

