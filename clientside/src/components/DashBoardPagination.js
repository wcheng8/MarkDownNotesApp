import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const DashBoardPagination = () => {
	return (
		<Pagination
			aria-label="Page navigation example"
			className="d-flex justify-content-center pt-4"
		>
			<PaginationItem>
				<PaginationLink first href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink previous href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">1</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">2</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">3</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">4</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">5</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink next href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink last href="#" />
			</PaginationItem>
		</Pagination>
	);
};

export default DashBoardPagination;
