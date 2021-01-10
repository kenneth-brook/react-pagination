import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Pagination extends Component {
	constructor(props) {
		super(props);
		const { totalRecords = null, pageLimit = 30, pageNeibours = 0 } = props;

		this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
		this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

		this.pageNeibours =
			typeof pageNeibours === "number"
				? Math.max(0, Math.min(pageNeibours, 2))
				: 0;

		this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

		this.state = { currentPage: 1 };
	}
}

Pagination.PropTypes = {
	totalRecords: PropTypes.number.isRequired,
	pageLimit: PropTypes.number,
	pageNeibours: PropTypes.number,
	onPageChanged: PropTypes.func,
};

export default Pagination;
