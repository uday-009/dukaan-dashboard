import './App.css'
import MainComponent from './components/MainComponent'
import RevenueCard from './components/RevenueCard'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className="flex relative">
      <SideBar />
      {/* <div>
        <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />
        <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />
        <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />
      </div> */}
      <MainComponent />
  </div>
  )
}

export default App
