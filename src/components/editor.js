import React, { useState, useEffect } from 'react';
import CodeEditor from 'react-ace';
import axios from 'axios';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-katzenmilch';
import 'ace-builds/src-noconflict/theme-vibrant_ink';
import Spin from '../Spin.gif';

function Editor() {
	const [ code, setCode ] = useState(localStorage.getItem('code') || '');
	const [ js, setJs ] = useState(localStorage.getItem('js') || ' ');
	const [ python, setPython ] = useState(localStorage.getItem('python') || ' ');
	const [ c, setC ] = useState(localStorage.getItem('c') || ' ');
	const [ font, setFont ] = useState(18);
	const [ lang, setLang ] = useState('javascript');
	const [ mode, setMode ] = useState('katzenmilch');
	const [ line, setLine ] = useState(1);
	const [ char, setChar ] = useState(0);
	const [ ip, setIp ] = useState('');
	let timeStamp = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;

	const onChange = (newValue) => {
		setCode(newValue);
		if (lang === 'python') {
			setPython(newValue);
		} else if (lang === 'javascript') {
			setJs(newValue);
		} else if (lang === 'c_cpp') {
			setC(newValue);
		}
	};
	useEffect(
		() => {
			localStorage.setItem('code', code);
			localStorage.setItem('python', python);
			localStorage.setItem('js', js);
			localStorage.setItem('c', c);
			const fetch = async () => {
				const iPadd = await axios.get('https://api.ipify.org');
				setIp(iPadd.data);
			};
			fetch();
		},
		[ code, python, js, c ]
	);

	const reset = {
		outlineOffset: '-2px',
		border: 0,
		backgroundColor: 'white',
		cursor: 'pointer',
		outline: 'none',
		padding: '0.25rem 0.5rem',
		margin: '0.25rem'
	};

	const language = (e) => {
		setLang(e.target.value);
		if (e.target.value === 'javascript') {
			if (code !== js) {
				setCode(js);
			} else {
				setCode('//type your javascript code here');
			}
		} else if (e.target.value === 'c_cpp') {
			if (code !== c) {
				setCode(c);
			} else {
				setCode('//type your C code here');
			}
		} else {
			if (code !== python) {
				setCode(python);
			} else {
				setCode('#type your python code here');
			}
		}
	};

	const modeChange = (e) => {
		if (e.target.checked === true) {
			setMode('vibrant_ink');
		} else {
			setMode('katzenmilch');
		}
	};
	const cursorChange = (selection) => {
		setLine(selection.cursor.row + 1);
		setChar(selection.cursor.column);
	};

	const clickHandler = () => {
		if (lang === 'javascript') {
			setCode('//type your javascript code here');
			setJs('//type your javascript code here');
		} else if (lang === 'c_cpp') {
			setCode('//type your C code here');
			setC('//type your C code here');
		} else {
			setCode('#type your python code here');
			setPython('#type your python code here');
		}
	};

	const setLoad = () => {
		// To get the data in the editor on Load
		if (code !== js) {
			setCode(localStorage.getItem('js'));
		} else {
			setCode('//type your javascript code here');
		}
	};
	const downloadHandler = () => {
		console.log(code);
	};

	const fontHandler = () => {
		if (font >= 26) {
			setFont(18);
		} else {
			setFont(font + 2);
		}
	};

	return (
		<div>
			<div className="container px-0 shadow-lg" style={{ borderRadius: '15px' }}>
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
						<button style={reset} className="align-self-center" onClick={fontHandler}>
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
						<button
							style={reset}
							className="align-self-center"
							data-toggle="modal"
							data-target="#exampleModalCenter"
						>
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
					{/* Modals */}
					<div
						className="modal fade"
						id="exampleModalCenter"
						tabIndex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h3 className="modal-title" id="exampleModalLongTitle">
										Attention : <strong>Reset Code</strong>
									</h3>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div
									className="modal-body"
									style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}
								>
									<h4>Entire code in the editor will be deleted. Do you want to continue?</h4>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-light btn-lg" data-dismiss="modal">
										No
									</button>
									<button
										type="button"
										className="btn btn-primary btn-lg"
										data-dismiss="modal"
										onClick={clickHandler}
									>
										Yes
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className=" fullscreen">
						<button style={reset}>
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
							<option value="javascript">Javascript(Node.js)</option>
							<option value="python">Python 3</option>
							<option value="c_cpp">C</option>
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
						fontSize={font}
						onCursorChange={cursorChange}
						editorProps={{ $blockScrolling: true }}
						onLoad={setLoad}
					/>
				</div>
				<div className="d-flex">
					<div className="px-2 fullscreen">
						<button style={reset} data-toggle="modal" data-target="#exampleModalCenter1">
							<i
								className="fa fa-download fa-2x "
								aria-hidden="true"
								style={{ width: '25px', height: '25px', color: 'darkgray' }}
							/>
						</button>
					</div>
					<div
						className="modal fade"
						id="exampleModalCenter1"
						tabIndex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h3 className="modal-title" id="exampleModalLongTitle">
										Attention:<strong>Save File</strong>
									</h3>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div
									className="modal-body"
									style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}
								>
									<h4>You are about to save the file.</h4>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-light btn-lg" data-dismiss="modal">
										No
									</button>
									<button
										type="button"
										className="btn btn-primary btn-lg"
										data-dismiss="modal"
										onClick={downloadHandler}
									>
										Yes
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="py-2 mt-1 mr-4 ">
						<font color="#33A950"> Line : </font> {line} <font color="#33A950"> Column : </font> {char}
					</div>

					<div className="align-self-center mr-4 ">
						<font color="#33A950">Font Size : </font>
						{font}
					</div>
					<div className="align-self-center ">
						<font color="#33A950">Your IP : </font>
						{ip}
					</div>
					<div className="ml-auto align-self-center mx-4 ">
						Compiling ...
						<img src={Spin} alt="" style={{ width: '35px', height: '35px' }} />
					</div>
				</div>
			</div>
			<div className="container px-0 my-3 d-flex">
				<button type="button" className="btn btn-success btn px-5  ml-auto ">
					Compile
				</button>
			</div>
			<div className="shadow-lg container px-0 my-5 " style={{ borderRadius: '15px' }}>
				<div>
					<div className="d-flex justify-content-between p-1">
						<div className="align-self-center ml-3">
							<font color="#33A950"> Status :</font> Success
						</div>
						<div className="align-self-center">
							{' '}
							<font color="#33A950"> Date :</font> {timeStamp}
						</div>
						<div className="align-self-center">
							<font color="#33A950">Time :</font> 0 Sec{' '}
						</div>
						<div className="align-self-center">
							<font color="#33A950">Memory :</font> 9.128 kB
						</div>
						<div className="fullscreen">
							<button style={reset}>
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
						value="The code Response"
						readOnly
						style={{
							resize: 'none',
							backgroundColor: 'beige',
							borderRadius: '0px 0px 15px 15px'
						}}
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
