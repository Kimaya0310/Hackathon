# 🚀 Smart AutoSense Setup Guide

This guide will help you get Smart AutoSense up and running on your local machine.

## 📋 System Requirements

- **Operating System**: Windows 10/11, macOS, or Linux
- **Python**: 3.8 or higher
- **Node.js**: 16.x or higher
- **npm**: 8.x or higher (comes with Node.js)

## 🔧 Step-by-Step Installation

### Step 1: Clone or Download the Project

```bash
# If using git
git clone <repository-url>
cd AutoSense

# Or download and extract the zip file
```

### Step 2: Backend Setup

1. **Open a terminal/command prompt** and navigate to the backend directory:

```bash
cd backend
```

2. **Create a virtual environment** (recommended for Python projects):

```bash
# Windows
python -m venv venv

# macOS/Linux
python3 -m venv venv
```

3. **Activate the virtual environment**:

```bash
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

You should see `(venv)` at the beginning of your command prompt.

4. **Install Python dependencies**:

```bash
pip install -r requirements.txt
```

5. **Run the backend server**:

```bash
python app.py
```

You should see:
```
🚗 Smart AutoSense Backend Starting...
📡 IoT Data Simulation Active
🤖 AI Fault Prediction Ready
 * Running on http://0.0.0.0:5000
```

**Keep this terminal window open!**

### Step 3: Frontend Setup

1. **Open a NEW terminal/command prompt** (keep the backend running)

2. **Navigate to the frontend directory**:

```bash
cd frontend
```

3. **Install Node.js dependencies**:

```bash
npm install
```

This may take a few minutes. You'll see a lot of packages being downloaded.

4. **Start the React development server**:

```bash
npm start
```

The browser should automatically open to `http://localhost:3000`

If it doesn't open automatically, manually navigate to `http://localhost:3000` in your browser.

## ✅ Verification

You should now see:

1. **Backend Terminal**: Running on port 5000
2. **Frontend Terminal**: Running on port 3000
3. **Browser**: Smart AutoSense dashboard with live data

### Test the Application

1. **Dashboard**: You should see real-time vehicle data updating every 3 seconds
2. **Live Indicator**: Red pulsing dot in the top right
3. **Data Updates**: Watch the numbers change in real-time
4. **Fault Detection**: Wait a few seconds - the AI will detect faults and show alerts

## 🐛 Troubleshooting

### Backend Issues

**Problem**: `python: command not found`
- **Solution**: Install Python from [python.org](https://www.python.org/downloads/)

**Problem**: `pip: command not found`
- **Solution**: Python 3.8+ includes pip. Try `python -m pip` instead

**Problem**: Port 5000 already in use
- **Solution**: Kill the process using port 5000 or change the port in `backend/app.py`

### Frontend Issues

**Problem**: `npm: command not found`
- **Solution**: Install Node.js from [nodejs.org](https://nodejs.org/)

**Problem**: `npm install` fails
- **Solution**: 
  - Clear npm cache: `npm cache clean --force`
  - Delete `node_modules` folder and `package-lock.json`
  - Run `npm install` again

**Problem**: Port 3000 already in use
- **Solution**: React will ask if you want to use a different port. Type 'Y' and press Enter.

**Problem**: CORS errors in browser console
- **Solution**: Make sure the backend is running on port 5000

### General Issues

**Problem**: Data not updating
- **Solution**: 
  1. Check both backend and frontend are running
  2. Check browser console for errors (F12)
  3. Verify backend is accessible at `http://localhost:5000/health`

**Problem**: Page is blank
- **Solution**: 
  1. Check browser console for errors
  2. Make sure all dependencies are installed
  3. Try clearing browser cache (Ctrl+Shift+R or Cmd+Shift+R)

## 🎯 Quick Test Commands

### Test Backend
```bash
# In a new terminal
curl http://localhost:5000/health
# Should return: {"status":"healthy","timestamp":"..."}

curl http://localhost:5000/getData
# Should return vehicle data JSON
```

### Test Frontend
- Open browser to `http://localhost:3000`
- Should see the Smart AutoSense dashboard
- Data should update every 3 seconds

## 📱 Using the Application

### Dashboard Tab
- View real-time vehicle sensor data
- Monitor engine temperature, battery, oil, and tire pressure
- See AI fault predictions

### Service Centers Tab
- Browse nearby service centers
- View ratings and distances
- Book service appointments

### Community Tab
- View community discussions
- Access tips and DIY guides
- Connect with other vehicle owners

## 🛑 Stopping the Application

1. **Frontend**: Press `Ctrl+C` in the frontend terminal
2. **Backend**: Press `Ctrl+C` in the backend terminal
3. **Deactivate virtual environment**: Type `deactivate` in the backend terminal

## 🚀 Next Steps

1. **Customize**: Modify the fault detection thresholds in `backend/app.py`
2. **Add Features**: Extend the dashboard with new components
3. **Connect Real IoT**: Replace simulation with actual sensor data
4. **Deploy**: Deploy to cloud platforms like Heroku, AWS, or Vercel

## 📚 Additional Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 💡 Tips

- Keep both terminals open while developing
- Use browser DevTools (F12) to debug frontend issues
- Check terminal output for backend errors
- The IoT data simulation runs continuously in the background
- Faults are randomly generated - wait a bit to see alerts!

---

**Need Help?** Open an issue on GitHub or check the troubleshooting section above.

Happy coding! 🚗✨

