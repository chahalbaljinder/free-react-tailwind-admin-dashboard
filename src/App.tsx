import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";

// New Screens
import SignInScreen from "./new-screens/SignInScreen";
import ForgotPasswordScreen from "./new-screens/ForgotPasswordScreen";
import CreateOrganizationScreen from "./new-screens/CreateOrganizationScreen";
import OrganizationDetailsScreen from "./new-screens/OrganizationDetailsScreen";
import EditOrganizationScreen from "./new-screens/EditOrganizationScreen";
import MyAccountsScreen from "./new-screens/MyAccountsScreen";
import AccountDetailScreen from "./new-screens/AccountDetailScreen";
import UniversalComponentsDemo from "./new-screens/universal-components/UniversalComponentsDemo";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />

            {/* New Screens */}
            <Route path="/new-screens/components-demo" element={<UniversalComponentsDemo />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* New Screens - Standalone */}
          <Route path="/new-screens/signin" element={<SignInScreen />} />
          <Route path="/new-screens/forgot-password" element={<ForgotPasswordScreen />} />
          <Route path="/new-screens/create-organization" element={<CreateOrganizationScreen />} />
          <Route path="/new-screens/organization-details" element={<OrganizationDetailsScreen />} />
          <Route path="/new-screens/edit-organization" element={<EditOrganizationScreen />} />
          <Route path="/new-screens/my-accounts" element={<MyAccountsScreen />} />
          <Route path="/new-screens/account-detail" element={<AccountDetailScreen />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
