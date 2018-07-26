import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
	updatePortfolioItems
} from '../../actions';

// Styles
import './Admin.scss';

class Admin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			section: '',
			item: '',
			field: '',
			value: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.updateItemData = this.updateItemData.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	}

	updateItemData() {
		const { dispatch, state } = this.props;

		dispatch(updatePortfolioItems(this.state, state.itemsByPortfolioType));
	}

	render() {
		const { state } = this.props;
		const { section } = this.state;
		const selectedSectionItems = (section !== '') ? state.itemsByPortfolioType[section].items : [];

		if(state.user.loggedIn) {
			return (
				<div className="row">
					<div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 center-xs" id="admin-box">
						<div className="row field-wrapper">
							<div className="col-xs-12">
								<label htmlFor="section">section</label>
								<select name="section" value={this.state.section} onChange={this.handleChange}>
									<option value=''></option>
									{
										Object.keys(state.itemsByPortfolioType).map((portfolio) => {
											return (
												<option key={portfolio} value={portfolio}>{portfolio}</option>
											);
										})
									}
								</select>
							</div>
						</div>
						<div className="row field-wrapper">
							<div className="col-xs-12">
								<label htmlFor="item">item</label>
								<select name="item" value={this.state.item} onChange={this.handleChange}>
									<option value=''></option>
									{
										Object.keys(selectedSectionItems).map((item) => {
											return (
												<option key={item} value={item}>{item}</option>
											);
										})
									}
								</select>
							</div>
						</div>
						<div className="row field-wrapper">
							<div className="col-xs-12">
								<label htmlFor="field">field</label>
								<select name="field" value={this.state.field} onChange={this.handleChange}>
									<option value=""></option>
									<option value="description">description</option>
									<option value="url">url</option>
									<option value="img">img</option>
								</select>
							</div>
						</div>
						<div className="row field-wrapper">
							<div className="col-xs-12">
								<label htmlFor="value">value</label>
								<textarea name="value" value={this.state.value} onChange={this.handleChange} />
							</div>
						</div>
						<div className="row button-wrapper">
							<div className="col-xs-12">
								<button type="button" onClick={this.updateItemData}>
									submit
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		}

		return (
			<Redirect to='/access' />
		);
	}
}

function mapStateToProps(state) {
	return {
		state
	};
}

Admin.propTypes = {
	dispatch: PropTypes.func.isRequired,
	state: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Admin);
