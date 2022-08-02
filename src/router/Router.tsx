import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useTypedSelector } from '../redux/store';
import Search from '../container/Search/Search';
import Summary from '../container/Summary/Summary';
import Loader from '../component/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

const Router: React.FC = () => {
    const { error, loading } = useTypedSelector(state => state.app);

    useEffect(() => {
        if (error.length) toast.error(error);
    }, [error])

    return (
        <BrowserRouter>
            <Loader hide={!loading} />
            <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/summary/:nasa_id" element={<Summary />} />
            </Routes>
            <ToastContainer theme="colored" />
        </BrowserRouter>
    );
}

export default Router;
