import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header";
import MainPage from "./pages/Main/MainPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterCompletePage from "./pages/Register/RegisterPage";
import RegisterUserInfoPage from "./pages/Register/RegisterInfo";
import TermsNConditionsPage from './pages/Register/TermsNConditions'
import AboutPage from "./pages/About/AboutPage";
import ResultPage from "./pages/Result/ResultPage";
import RecipePage from "./pages/Recipe/RecipePage";
import MyPage from "./pages/Mypage/MyPage";
import ScrollToTop from "./components/Common/ScrollToTop";
import Footer from "./components/Common/Footer";
import IntroPage from "./pages/About/IntroducePage";
import NotFound from "./pages/NotFound/NotFound";

function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/recipe/:id" element={<RecipePage />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register/termsNConditions" element={<TermsNConditionsPage />} />
                <Route path="/register/userInfo" element={<RegisterUserInfoPage />} />
                <Route path="/register/complete" element={<RegisterCompletePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/introUs" element={<IntroPage/>} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default Router;
