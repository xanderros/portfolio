function ExperienceItem({company, position, period, activity}) {
	return (
			<div className="exp__row">
				<div className="exp__line">
					<div className="exp__line-inner"></div>
				</div>
				<div className="exp__container">
					<div className="exp__cell">
						<div className="exp__company">{company}</div>
						<div className="exp__position">{position}</div>
						<div className="exp__period">{period}</div>
					</div>
					<div className="exp__cell content">
						<ul>
							{activity.map(item => (
									<li key={item}>
										{item}
									</li>
							))}
						</ul>
					</div>
				</div>
			</div>
	);
}

export default ExperienceItem;
