import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { t } from "shared/translations/i18n";

import ProfileIcon from "common/media/icons/Profile";
import CreditCardIcon from "common/media/icons/CreditCard";
import SettingsIcon from "common/media/icons/Settings";

import User from "common/components/User";

class Overview extends Component {
	render() {
		return (
			<Fragment>
				<Helmet>
					<title>{t("headers.overview.title")}</title>
					<meta name="description" content={t("headers.overview.description")} />
				</Helmet>
				<div className="container p-3">
					<div className="p-3 pt-md-5 pb-md-4">
						<div className="text-center">
							<h1>{t("components.overview.title")}</h1>
							<p className="lead mb-4">{t("components.overview.leadDescription")}</p>
							<div className="row py-3">
								<div class="col-md-4">
									<div className="card rounded-0 mb-3 text-left">
										<div className="card-body">
											<Link to={{ pathname: "/profile" }}>
												<h5 className="card-title">
													<span className="mr-2">
														<ProfileIcon width="1rem" height="1rem" />
													</span>
													{t("components.overview.cards.profile.title")}
												</h5>
											</Link>
											<div className="card-text">
												<ul>
													<li>{t("components.overview.cards.profile.listOne")}</li>
													<li>{t("components.overview.cards.profile.listTwo")}</li>
													<li>{t("components.overview.cards.profile.listThree")}</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div className="card rounded-0 mb-3 text-left">
										<div className="card-body">
											<Link to={{ pathname: "/billing" }}>
												<h5 className="card-title">
													<span className="mr-2">
														<CreditCardIcon width="1rem" height="1rem" />
													</span>
													{t("components.overview.cards.billing.title")}
												</h5>
											</Link>
											<div className="card-text">
												<ul>
													<li>{t("components.overview.cards.billing.listOne")}</li>
													<li>{t("components.overview.cards.billing.listTwo")}</li>
													<li>{t("components.overview.cards.billing.listThree")}</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div className="card rounded-0 text-left">
										<div className="card-body">
											<Link to={{ pathname: "/settings" }}>
												<h5 className="card-title">
													<span className="mr-2">
														<SettingsIcon width="1rem" height="1rem" />
													</span>
													{t("components.overview.cards.settings.title")}
												</h5>
											</Link>
											<div className="card-text">
												<ul>
													<li>{t("components.overview.cards.settings.listOne")}</li>
													<li>{t("components.overview.cards.settings.listTwo")}</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

Overview.propTypes = {
	user: PropTypes.object
};

export default User(Overview);
