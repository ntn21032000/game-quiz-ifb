function getRandom(items) {
	i = Math.floor(Math.random()*items.length)
  return items[i]
}
class Question extends React.Component {
	constructor() {
		super()
		this.state = {
	      img: '',
	    }
	    this.getResult = this.getResult.bind(this)
	}
    getResult () {
    	this.setState({img: getRandom(this.props.dataImg)}, function () {
		    // console.log(this.props.dataImg)
		    // console.log(i)
		    dataTemp = this.props.dataImg
		    textResultTemp = this.props.textResult
		    ReactDOM.render(<Answer i={i}/>,
		    				document.getElementById('root'));
		});
	};


	render() {
	return <div>
			    <div className="item" onClick={this.getResult}>
			        <div className="img">
			            <img src={this.props.imgQuest}/>
			        </div>
		        	<p>{this.props.testQuest}</p>
		        </div>
	        </div>;
	}
}

class Answer extends React.Component {
	constructor(props) {
		super(props)
		// console.log(this.props.i);
	    this.getShare = this.getShare.bind(this)
	}
    getShare () {
		console.log("shared")
		let base64Picture = dataURL
		FBInstant.shareAsync({
		intent: 'INVITE',
		image: base64Picture,
		text: 'X is asking for your help!',
		data: { myReplayData: '...' },
		}).then(function() {
		FBInstant.logEvent('afterStartGameAsync')
		console.log("shared");
		}).catch( function(err)
		{

	   console.log('failed to share: ' + err.code + " :: " + err.message)

	});
};

handleClick() {
history.go(0)
}

componentDidMount(){
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    var imageObj = new Image()
	imageObj.src = dataTemp[i]
	imageObj.onload = function(){
		ctx.drawImage(imageObj, 0, 0, 350, 230)
		ctx.font = "20px sans-serif"
		ctx.fillText(textResultTemp[textResultTemp.length-1] + FBInstant.player.getName(), 10, 250)
		ctx.fillText("là "+textResultTemp[i], 10, 270)
		dataURL = canvas.toDataURL()
		// console.log(nameTemp)
	}
}

	render() {
	return <div className="result">

				<div>
				    <canvas ref="canvas" width={350} height={275}>
					Your browser does not support the canvas element.
					</canvas>
		        </div>

		        <div className="pShare" onClick={this.getShare}>
		        	<p>Chia sẻ</p>
		        </div>

		        <div className="goBack" onClick={this.handleClick}>
		        	<span><i class="fa fa-arrow-left fa-xs"></i></span><p>Trở về</p>
		        </div>
	        </div>
	}
}
let dataURL = ""
let i = 0
let dataTemp = []
let textResultTemp = ""

const dataImgNghe = ["./public/img/lap-trinh-vien.jpg","./public/img/pm.png","./public/img/QA.png","./public/img/tester.jpg"]
const textResultNghe = ["Programmer", "Project Manager", "Quality Assurance", "Tester", "Nghề nghiệp phù hợp với "]

const dataImgNha = ["./public/img/biet-thu.jpg","./public/img/nha-cap-4.jpeg","./public/img/nha-go.jpeg", "./public/img/nha-tranh.jpeg"]
const textResultNha = ["Biệt thự", "Nhà cấp 4", "Nhà gỗ", "Nhà tranh", "Nhà tương lai của "]
ReactDOM.render(
	<div>
	<Question testQuest="Nghề nghiệp phù hợp với bạn là?" dataImg={dataImgNghe} textResult={textResultNghe} imgQuest="./public/img/img_nghe.jpg"/>
	<Question testQuest="Nhà tương lai của bạn là?" dataImg={dataImgNha} textResult={textResultNha} imgQuest="./public/img/nha-quest.jpeg"/>
	</div>
	, document.getElementById('root'))

