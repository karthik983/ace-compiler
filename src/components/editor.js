import React, { useState, useEffect } from 'react';
import CodeEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-chaos';
import 'ace-builds/src-noconflict/theme-eclipse';
import Spin from '../Spin.gif';

function Editor() {
	const [ code, setCode ] = useState(localStorage.getItem('code') || '');

	const [ lang, setLang ] = useState('javascript');
	const [ mode, setMode ] = useState('eclipse');
	const [ line, setLine ] = useState(1);
	const [ char, setChar ] = useState(0);

	const onChange = (newValue) => {
		setCode(newValue);
	};
	useEffect(
		() => {
			localStorage.setItem('code', code);
		},
		[ code ]
	);

	const reset = {
		outlineOffset: '-2px',
		border: 0,
		backgroundColor: 'white',
		cursor: 'pointer',

		padding: '0.25rem 0.5rem',
		margin: '0.25rem'
	};
	const language = (e) => {
		setLang(e.target.value);
	};
	const modeChange = (e) => {
		if (e.target.checked === true) {
			setMode('chaos');
		} else {
			setMode('eclipse');
		}
	};
	const cursorChange = (selection) => {
		setLine(selection.cursor.row + 1);
		setChar(selection.cursor.column);
	};

	const clickHandler = () => {
		setCode('');
	};
	const screenHandler = () => {
		// setHeight("1500px");
		// setWidth("1500px");
		// ace.resize()
	};

	return (
		<div style={{ marginLeft: '250px', marginRight: '250px', marginTop: '10px' }}>
			<div className="container rounded-lg   px-0 shadow-lg">
				<div className="d-flex ">
					<div className=" ml-5 px-2 align-self-center ">Light Mode</div>
					<div className=" align-self-center" style={{ paddingTop: '8px' }}>
						<label className="switch ">
							<input className=" align-self-center" type="checkbox" onClick={modeChange} />
							<span className="slider round " />
						</label>
					</div>
					<div className="mr-auto px-2  align-self-center">Dark Mode </div>

					<div className="reset">
						<button style={reset} className="align-self-center" onClick={clickHandler}>
							<i
								className="fa fa-text-height fa-lg"
								aria-hidden="true"
								style={{
									width: '25px',
									height: '25px',
									color: 'darkgray',
									paddingTop: '10px'
								}}
							/>
						</button>
					</div>
          <div className="reset">
						<button style={reset} className="align-self-center" onClick={clickHandler}>
							<i
								className="fa fa-refresh fa-lg"
								aria-hidden="true"
								style={{
									width: '25px',
									height: '25px',
									color: 'darkgray',
									paddingTop: '10px'
								}}
							/>
						</button>
					</div>
					<div className=" fullscreen">
						<button style={reset} onClick={screenHandler}>
							<i
								className="fa fa-expand fa-lg "
								aria-hidden="true"
								style={{
									width: '25px',
									height: '25px',
									color: 'darkgray',
									paddingTop: '10px'
								}}
							/>
						</button>
					</div>
					<div className=" mr-5 align-self-center">
						<select value={lang} className="form-control mx-1 " onChange={language}>
							<option value="javascript">Javascript</option>
							<option value="python">Python</option>
							<option value="c_cpp">C / C++</option>
							<option value="java">Java</option>
						</select>
					</div>
				</div>
				<div>
					<CodeEditor
						mode={lang}
						value={code}
						theme={mode}
						onChange={onChange}
						showPrintMargin={false}
						name="UNIQUE_ID_OF_DIV"
						wrapEnabled={true}
						width="890x"
						height="500px"
						fontSize={18}
						onCursorChange={cursorChange}
						editorProps={{ $blockScrolling: true }}
					/>
				</div>
				<div className="d-flex">
					<div className="px-2 fullscreen">
						<button style={reset} onClick={screenHandler}>
							<i
								className="fa fa-download fa-2x "
								aria-hidden="true"
								style={{ width: '25px', height: '25px', color: 'darkgray' }}
							/>
						</button>
					</div>
					<div>
						{' '}
						<div className="py-2 mt-1 mr-4">
							Line : {line} Column : {char}
						</div>
					</div>
					<div className="ml-auto align-self-center mx-4 ">
						Compiling ...<img src={Spin} alt="" style={{ width: '35px', height: '35px' }} />
					</div>
				</div>
			</div>
			<div className="container px-0 my-3 d-flex">
				<button type="button" className="btn btn-primary btn px-5  ml-auto ">
					Compile
				</button>
			</div>
			<div className="shadow-lg container rounded-lg px-0 my-5 ">
				<div>
					<div className="d-flex justify-content-between p-1">
						<div className="align-self-center ml-3">Status : Successfully executed </div>
						<div className="align-self-center"> Date : 2020-04-16 13:00:00 </div>
						<div className="align-self-center">Time : 0 Sec </div>
						<div className="align-self-center">Memory : 9.128 kB</div>
						<div className="fullscreen">
							<button style={reset} onClick={screenHandler}>
								<i
									className="fa fa-times fa-2x "
									aria-hidden="true"
									style={{ width: '25px', height: '25px', color: 'darkgray' }}
								/>
							</button>
						</div>
					</div>
				</div>
				<div className="m-auto">
					<textarea
						className="form-control "
						rows="5"
						style={{ resize: 'none', backgroundColor: 'beige' }}
						// Misty Rose ""mistyrose || Beige "beige"
					/>
				</div>
			</div>
			<div style={{ textAlign: 'center', padding: '30px', color: '#33a950' }}>
				<a href="https://code.in" target="_blank" rel="noopener noreferrer">
					{' '}
					&copy; CODE.IN
				</a>
			</div>
		</div>
	);
}

export default Editor;
