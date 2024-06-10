import React from "react";
import Register from "../autentication/Register";
import Signin from "../autentication/Signin";
import { Route, Routes } from "react-router-dom";
import ProductList from "../product/ProductList";

const Myroutes = () => {
	const PUBLIC_ROUTES = [
		{ link: "/", element: <Register />, id: 1 },
		{ link: "/login", element: <Signin />, id: 2 },
		{ link: "/foodlist", element: <ProductList />, id: 3 },
		{ link: "/register", element: <Register />, id: 4 },

	];

	return (
		<Routes>
			{PUBLIC_ROUTES.map((el) => (
				<Route path={el.link} element={el.element} key={el.id} />
			))}
		</Routes>
	);
};

export default Myroutes;
