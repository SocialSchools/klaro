import React from 'react';
import AppItem from './app-item';
import { getPurposes } from 'utils/config';

export default class Apps extends React.Component {
	constructor(props, context) {
		super(props, context);
		props.manager.watch(this);
		this.state = {
			consents: props.manager.consents
		};
	}

	componentWillUnmount() {
		const { manager } = this.props;
		manager.unwatch(this);
	}

	update(obj, type, data) {
		const { manager } = this.props;
		if (obj == manager && type == 'consents')
			this.setState({ consents: data });
	}

	render() {
		const { config, t, manager } = this.props;
		const { consents } = this.state;
		const { apps } = config;

		const toggle = (apps, value) => {
			apps.map(app => {
				manager.updateConsent(app.name, value);
			});
			if (manager.confirmed) manager.saveAndApplyConsents();
		};

		const appItems = apps.map((app, key) => {
			const toggleApp = value => {
				toggle([app], value);
			};
			const checked = consents[app.name];
			return (
				<li className="cm-app" key={key}>
					<AppItem
						checked={checked || app.required}
						text={this.props.text}
						onToggle={toggleApp}
						t={t}
						{...app}
					/>
				</li>
			);
		});

		return <ul className="cm-apps">{appItems}</ul>;
	}
}
