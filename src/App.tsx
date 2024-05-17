import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainHome from "./components/MainHome";
import Home from "./components/Home";
import DetailsPage from "./components/DetailsPage";
import Practice from "./components/Practice";
import TeamDeath from "./components/TeamDeath";
import Weapons from "./components/Weapons";
import WeaponSmg from "./components/WeaponSmg";
import WeaponsShotgun from "./components/WeaponsShotgun";
import WeaponsRifle from "./components/WeaponsRifle";
import WeaponsSniper from "./components/WeaponsSniper";
import WeaponsHeavy from "./components/WeaponsHeavy";
import Ascend from "./components/maps/Ascend";
import Bind from "./components/maps/Bind";
import Breeze from "./components/maps/Breeze";
import Fracture from "./components/maps/Fracture";
import Haven from "./components/maps/Haven";
import Icebox from "./components/maps/Icebox";
import Lotus from "./components/maps/Lotus";
import Pearl from "./components/maps/Pearl";
import Split from "./components/maps/Split";
import District from "./components/tdMap/District";
import Kasbah from "./components/tdMap/Kasbah";
import Piazza from "./components/tdMap/Piazza";
import Drift from "./components/tdMap/Drift";
import Range from "./components/tdMap/Range";
import AgentStat from "./components/gameStat/AgentStat";
import WeaponStat from "./components/gameStat/WeaponStat";
import MapStat from "./components/gameStat/MapStat";
import ScoutPlayer from "./components/ScoutPlayer";
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <Layout>
            <MainHome />
          </Layout>
        }
      />
      <Route
        path="/home/details"
        element={
          <Layout>
            <DetailsPage />
          </Layout>
        }
      />
      <Route
        path="/teamdeath"
        element={
          <Layout>
            <TeamDeath />
          </Layout>
        }
      />
      <Route
        path="/practice"
        element={
          <Layout>
            <Practice />
          </Layout>
        }
      />

      <Route
        path="/weapons"
        element={
          <Layout>
            <Weapons />
          </Layout>
        }
      />
      <Route
        path="/smgs"
        element={
          <Layout>
            <WeaponSmg />
          </Layout>
        }
      />
      <Route
        path="/shotguns"
        element={
          <Layout>
            <WeaponsShotgun />
          </Layout>
        }
      />
      <Route
        path="/rifles"
        element={
          <Layout>
            <WeaponsRifle />
          </Layout>
        }
      />
      <Route
        path="/snipers"
        element={
          <Layout>
            <WeaponsSniper />
          </Layout>
        }
      />
      <Route
        path="/heavy"
        element={
          <Layout>
            <WeaponsHeavy />
          </Layout>
        }
      />
      <Route
        path="/ascend"
        element={
          <Layout>
            <Ascend />
          </Layout>
        }
      />
      <Route
        path="/bind"
        element={
          <Layout>
            <Bind />
          </Layout>
        }
      />
      <Route
        path="/breeze"
        element={
          <Layout>
            <Breeze />
          </Layout>
        }
      />
      <Route
        path="/fracture"
        element={
          <Layout>
            <Fracture />
          </Layout>
        }
      />
      <Route
        path="/haven"
        element={
          <Layout>
            <Haven />
          </Layout>
        }
      />
      <Route
        path="/icebox"
        element={
          <Layout>
            <Icebox />
          </Layout>
        }
      />
      <Route
        path="/lotus"
        element={
          <Layout>
            <Lotus />
          </Layout>
        }
      />
      <Route
        path="/pearl"
        element={
          <Layout>
            <Pearl />
          </Layout>
        }
      />
      <Route
        path="/split"
        element={
          <Layout>
            <Split />
          </Layout>
        }
      />
      <Route
        path="/district"
        element={
          <Layout>
            <District />
          </Layout>
        }
      />
      <Route
        path="/kasbah"
        element={
          <Layout>
            <Kasbah />
          </Layout>
        }
      />
      <Route
        path="/piazza"
        element={
          <Layout>
            <Piazza />
          </Layout>
        }
      />
      <Route
        path="/drift"
        element={
          <Layout>
            <Drift />
          </Layout>
        }
      />
      <Route
        path="/therange"
        element={
          <Layout>
            <Range />
          </Layout>
        }
      />
      <Route
        path="/mapstat"
        element={
          <Layout>
            <MapStat />
          </Layout>
        }
      />
      <Route
        path="/agentstat"
        element={
          <Layout>
            <AgentStat />
          </Layout>
        }
      />
      <Route
        path="/weaponstat"
        element={
          <Layout>
            <WeaponStat />
          </Layout>
        }
      />
      <Route
        path="/scoutplayer"
        element={
          <Layout>
            <ScoutPlayer />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
