import React, { Component } from "react"

class Province extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowCapital: false
        }
    }

    render() {
        return (
            <div className="province-container" key={this.props.name}>
                <img alt={`${this.props.name}'s Flag`} width={125} src={this.props.flagUrl} />
                <div>
                    <h3>{this.props.name}</h3>
                    {this.state.isShowCapital ? <p>{this.props.capital}</p> : undefined}
                </div>
                <button
                    data-testid = "button-test"
                    onClick={() => this.setState({ isShowCapital: !this.state.isShowCapital })}
                    className={this.state.isShowCapital ? "btn-capital-hide" : "btn-capital-show"}
                >
                    {this.state.isShowCapital ? "Hide Capital" : "Show Capital"}
                </button>
            </div>
        )
    }
}

export default Province;