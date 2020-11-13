var scene, camera, renderer, raycaster, mouse = { x : 0, y : 0 };
	 
var kartax = 0, kartay = 0;
var cube1;
	 
	 

//(function(){	var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()	 	


function init() {
	
	
	// scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xdddddd);
	

    // camera	
    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.x = -0.99;
	camera.rotation.y = 0.80;
	camera.rotation.z = 0.83;
    camera.position.x = 76.0;
    camera.position.y  = 36.6;
    camera.position.z = 39.5;
	
	
    // controls	
    controls = new THREE.OrbitControls(camera);
	controls.maxPolarAngle = Math.PI/2-0.3;
	controls.minDistance = 35;
	controls.maxDistance = 74;
	controls.target.x = 26.8;
	controls.target.y = -2.8;
	controls.target.z = 13.8;
	
	controls.target.set(21.649290570201952,-2.8, 3.9833366000268615);
camera.position.set(74.80642452717815, 27.238531307646696, 34.07479296823253);
camera.rotation.set(-0.7845179861524927,0.8961399148571694,0.6621452834896173);
	
	// light	
	light = new THREE.AmbientLight (0xfefefe,2);
    scene.add(light);
		
		
	//renderer	
    renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth-3.5,window.innerHeight-3.5);
	renderer.setPixelRatio(0.8);
    
		
    var container = document.getElementById('container');
    container.appendChild(renderer.domElement);
	
	
	// skybox
	var geometry = new THREE.CubeGeometry(300,300, 300);
	var cubeMaterials=
	[
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load( "img/skyblock/cloudtop_ft.png" ), side: THREE.DoubleSide}
		),
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load( "img/skyblock/cloudtop_bk.png" ), side: THREE.DoubleSide}
		),
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load( "img/skyblock/cloudtop_up.png" ), side: THREE.DoubleSide}
		),
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load( "img/skyblock/cloudtop_dn.png" ), side: THREE.DoubleSide}
		),
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load( "img/skyblock/cloudtop_rt.png" ), side: THREE.DoubleSide}
		),
		new THREE.MeshBasicMaterial({map: new THREE.TextureLoader( ).load( "img/skyblock/cloudtop_lf.png" ), side: THREE.DoubleSide}
		)
	];
	var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
	var cube = new THREE.Mesh(geometry, cubeMaterial);
	scene.add(cube);
	
	
	// model	
    let loader = new THREE.GLTFLoader();
      loader.load('scene (8).glb', function(gltf){
        cart = gltf.scene.children[0];
		cart.position.set(0,0,0);
        scene.add(gltf.scene);
        animate();
        });
		
		
	// sprites	
	var spriteMap = new THREE.TextureLoader().load( "img/point2.png" );
    var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
	
	
	function sprites() {
    
	var sprite1 = new THREE.Sprite( spriteMaterial );
	sprite1.name = "ekonom";
	sprite1.position.set( 24, 5, 70 );
	sprite1.scale.set(2, 2, 1.0 ); 
	sprite1.rotation.y = 45;
	scene.add(sprite1);
	
	var sprite2 = new THREE.Sprite( spriteMaterial );
	sprite2.name = "not";
	sprite2.position.set( 15.8, 4.5, 77.3 );
	sprite2.scale.set(2, 2, 1.0 ); 
	sprite2.rotation.y = 45;
	scene.add(sprite2);
	
	var sprite3 = new THREE.Sprite( spriteMaterial ); 
	sprite3.name = "elektro";
	sprite3.position.set( 11.7,5,52.4);
	sprite3.scale.set(2, 2, 1.0 ); 
	sprite3.rotation.y = 45;
	scene.add(sprite3);
	
	var sprite4 = new THREE.Sprite( spriteMaterial );
	sprite4.name = "zr";
	sprite4.position.set(-19.5, 5 ,69.9);
	sprite4.scale.set(2, 2, 1.0 ); 
	sprite4.rotation.y = 45;
	scene.add(sprite4);
	
	var sprite5 = new THREE.Sprite( spriteMaterial );
	sprite5.name = "meh";
	sprite5.position.set(7.8, 5 ,39.9);
	sprite5.scale.set(2, 2, 1.0 ); 
	sprite5.rotation.y = 45;
	scene.add(sprite5);
	
	var sprite6 = new THREE.Sprite( spriteMaterial );
	sprite6.name = "hydro";
	sprite6.position.set(3.7, 5 ,29.4);
	sprite6.scale.set(2, 2, 1.0 ); 
	sprite6.rotation.y = 45;
	scene.add(sprite6);
	
	var sprite7 = new THREE.Sprite( spriteMaterial );
	sprite7.name = "glavniy";
	sprite7.position.set(18.3, 7.2 ,4.2);
	sprite7.scale.set(2, 2, 1.0 ); 
	sprite7.rotation.y = 45;
	scene.add(sprite7);
	
	var sprite8 = new THREE.Sprite( spriteMaterial );
	sprite8.name = "ob1";
	sprite8.position.set(13.2, 6.5 ,-7.8);
	sprite8.scale.set(2, 2, 1.0 ); 
	sprite8.rotation.y = 45;
	scene.add(sprite8);
	
	var sprite9 = new THREE.Sprite( spriteMaterial );
	sprite9.name = "ob2";
	sprite9.position.set(2.8, 6.5 ,-17.7);
	sprite9.scale.set(2, 2, 1.0 ); 
	sprite9.rotation.y = 45;
	scene.add(sprite9);
	
	var sprite10 = new THREE.Sprite( spriteMaterial );
	sprite10.name = "ob3";
	sprite10.position.set(-5.7, 6 ,-26.3);
	sprite10.scale.set(2, 2, 1.0 ); 
	sprite10.rotation.y = 45;
	scene.add(sprite10);
	
	var sprite11 = new THREE.Sprite( spriteMaterial );
	sprite11.name = "ob4";
	sprite11.position.set(33.5, 6 ,-26.3);
	sprite11.scale.set(2, 2, 1.0 ); 
	sprite11.rotation.y = 45;
	scene.add(sprite11);
		
	var sprite12 = new THREE.Sprite( spriteMaterial );
	sprite12.name = "ob5";
	sprite12.position.set(27.5, 6 ,-31.8);
	sprite12.scale.set(2, 2, 1.0 ); 
	sprite12.rotation.y = 45;
	scene.add(sprite12);
	
	var sprite13 = new THREE.Sprite( spriteMaterial );
	sprite13.name = "ob6";
	sprite13.position.set(21, 6 ,-37.3);
	sprite13.scale.set(2, 2, 1.0 ); 
	sprite13.rotation.y = 45;
	scene.add(sprite13);
	
	var sprite14 = new THREE.Sprite( spriteMaterial );
	sprite14.name = "ob7";
	sprite14.position.set(15.8, 6 ,-41.9);
	sprite14.scale.set(2, 2, 1.0 ); 
	sprite14.rotation.y = 45;
	scene.add(sprite14);
	
	var sprite15 = new THREE.Sprite( spriteMaterial );
	sprite15.name = "ob8";
	sprite15.position.set(9.6, 6 ,-48.8);
	sprite15.scale.set(2, 2, 1.0 ); 
	sprite15.rotation.y = 45;
	scene.add(sprite15);
	
	var sprite16 = new THREE.Sprite( spriteMaterial );
	sprite16.name = "ob10";
	sprite16.position.set(-6.7, 6 ,-38.4);
	sprite16.scale.set(2, 2, 1.0 ); 
	sprite16.rotation.y = 45;
	scene.add(sprite16);
	
	var sprite17 = new THREE.Sprite( spriteMaterial );
	sprite17.name = "ob9";
	sprite17.position.set(-13.2, 6 ,-55);
	sprite17.scale.set(2, 2, 1.0 ); 
	sprite17.rotation.y = 45;
	scene.add(sprite17);
	
	var sprite18 = new THREE.Sprite( spriteMaterial );
	sprite18.name = "ob12";
	sprite18.position.set(-21.8, 6 ,-44.3);
	sprite18.scale.set(2, 2, 1.0 ); 
	sprite18.rotation.y = 45;
	scene.add(sprite18);
	
	var sprite19 = new THREE.Sprite( spriteMaterial );
	sprite19.name = "ob18";
	sprite19.position.set(-10.7, 6 ,-63.5);
	sprite19.scale.set(2, 2, 1.0 ); 
	sprite19.rotation.y = 45;
	scene.add(sprite19);
	
	var sprite20 = new THREE.Sprite( spriteMaterial );
	sprite20.name = "ob19";
	sprite20.position.set(-26.7, 6 ,-71.5);
	sprite20.scale.set(2, 2, 1.0 ); 
	sprite20.rotation.y = 45;
	scene.add(sprite20);
	
	var sprite21 = new THREE.Sprite( spriteMaterial );
	sprite21.name = "ob20";
	sprite21.position.set(-42.8, 6 ,-56.7);
	sprite21.scale.set(2, 2, 1.0 ); 
	sprite21.rotation.y = 45;
	scene.add(sprite21);
	
	var sprite22 = new THREE.Sprite( spriteMaterial );
	sprite22.name = "ob15";
	sprite22.position.set(-32.9, 6 ,-53.9);
	sprite22.scale.set(2, 2, 1.0 ); 
	sprite22.rotation.y = 45;
	scene.add(sprite22);
	
	var sprite23 = new THREE.Sprite( spriteMaterial );
	sprite23.name = "vetfak";
	sprite23.position.set(-53.6, 6 ,-32.1);
	sprite23.scale.set(2, 2, 1.0 ); 
	sprite23.rotation.y = 45;
	scene.add(sprite23);
	
	var sprite24 = new THREE.Sprite( spriteMaterial );
	sprite24.name = "stadion";
	sprite24.position.set(-41.4, 6 ,11.5);
	sprite24.scale.set(2, 2, 1.0 ); 
	sprite24.rotation.y = 45;
	scene.add(sprite24);
	
	var sprite25 = new THREE.Sprite( spriteMaterial );
	sprite25.name = "sport";
	sprite25.position.set(-4, 6 ,5.5);
	sprite25.scale.set(2, 2, 1.0 ); 
	sprite25.rotation.y = 45;
	scene.add(sprite25);
	
	var sprite26 = new THREE.Sprite( spriteMaterial );
	sprite26.name = "zoo";
	sprite26.position.set(44.5, 7 ,0.3);
	sprite26.scale.set(2, 2, 1.0 ); 
	sprite26.rotation.y = 45;
	scene.add(sprite26);
	
	var sprite27 = new THREE.Sprite( spriteMaterial );
	sprite27.name = "ob17";
	sprite27.position.set(36.1, 6 ,33.9);
	sprite27.scale.set(2, 2, 1.0 ); 
	sprite27.rotation.y = 45;
	scene.add(sprite27);
	}
	
	sprites();
	
		
		
	// resize	
	window.addEventListener('resize', onWindowResize, false);	
	
	
	// compass
	var dir = new THREE.Vector3();
    var sph = new THREE.Spherical();	
    renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
    camera.getWorldDirection(dir);
    sph.setFromVector3(dir);
    compass.style.transform = `rotate(${THREE.Math.radToDeg(sph.theta) - 180}deg)`;});
	
	
	// raycaster
	raycaster = new THREE.Raycaster();
	renderer.domElement.addEventListener( 'click', raycast, false );
var k = 0;

function animate(time) {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
	mappoint();
    }	
	
}


	
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    }	
	  

  

	

	
	
function mappoint(){
if (controls.target.x < 0){
		kartax = (81 + controls.target.x)*1.333;
	    if (controls.target.z < 0) {
			kartay = (81 + controls.target.z)*1.333;
			document.getElementById("indicator").style.left = kartax + 'px';
			document.getElementById("indicator").style.top = kartay + 'px';
		}
			else {
				kartay = 216-((81 - controls.target.z)*1.333);
			    document.getElementById("indicator").style.left = kartax + 'px';
			    document.getElementById("indicator").style.top = kartay + 'px';
			}
	}
	else {
         kartax = 216-((81 - controls.target.x)*1.333);	
		 if (controls.target.z < 0) {
			kartay = (81 + controls.target.z)*1.333;
			    document.getElementById("indicator").style.left = kartax + 'px';
			    document.getElementById("indicator").style.top = kartay + 'px';
		}
			else {
				kartay = 216 - ((81 - controls.target.z)*1.333);
			    document.getElementById("indicator").style.left = kartax + 'px';
			    document.getElementById("indicator").style.top = kartay + 'px';
			}
	}
}	


	
function raycast ( e ) {
	
	var popup = document.getElementById('mypopup');
	var popupClose = document.querySelector('.close');
	
	var popup = document.getElementById('mypopup');
	var popupClose = document.querySelector('.close');

    popupClose.onclick = function() {
		popup.style.display = "none";
	};
	
	window.onclick = function(e) {
		if(e.target == popup) {
			popup.style.display = "none";
		}
	};
			

    mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

    
    raycaster.setFromCamera( mouse, camera );    

   
    var intersects = raycaster.intersectObjects( scene.children );

    for ( var i = 0; i < intersects.length; i++ ) {
		if (intersects[ i ].object.name == "ekonom"){
			document.getElementById("header1").innerHTML="Здание учебного корпуса экономического факультета (ЭК)<br>The building of the economic faculty training building";
		    document.getElementById("body1").innerHTML="<h3>Кафедры:<br>Departments:</h3> <p>Информационных систем<br>Information Systems</p><p>Компьютерных систем и технологий и систем<br>Computer systems and technologies and systems</p><p>Системного анализа и обработки информации<br>System analysis and information processing</p><p>Экономической кибернетики<br>Economic cybernetics </p> <p>Организации производства и инновационной деятельности<br>Production and innovation organizations</p><p>Управления и маркетинга<br>Management and Marketing</p><p>Экономики и внешнеэкономической деятельности<br>Economies and foreign economic activity</p><p>Институциональной экономики и инвестиционного менеджмента<br>Institutional economics and investment management</p>"
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Экономический факультет<br>Faculty of Economics</p><p>Факультет прикладной информатики<br>Faculty of Applied Informatics</p>";
			popup.style.display = "block";
		}
		
		
		if (intersects[ i ].object.name == "not"){
			document.getElementById("header1").innerHTML="Корпус заочного обучения(НОТ)<br>Correspondence course building";
		    document.getElementById("body1").innerHTML="<h3>Кафедры:<br>Departments:</h3> <p>Экономический факультет<br>Faculty of Economics</p>";
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет прикладной информатики<br>Faculty of Applied Informatics</p></p> <p>Заочное отделение<br>Correspondence course</p>";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "elektro"){
			document.getElementById("header1").innerHTML="Здание учебного корпуса энергетики (ЭЛ)<br>The building of the Energy Training Corps";
		    document.getElementById("body1").innerHTML="<h3>Кафедры:<br>Departments:</h3> <p>Применения Электроэнергии<br> Power applications </p> <p>Физики<br> Physics </p> <p>Электрических машин и электропривода<br> Electrical machines and electric drives </p> <p>Электротехники, теплотехники и возобновляемых источников <br> Electrical, heat engineering and renewable sources </p> <p>Государственного и муниципального управления <br> State and municipal administration </p> <p>Менеджмента<br>Management </p>"
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет энергетики<br> Faculty of Energy </p><p>Факультет управления<br>Faculty of Management</p>";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "zr"){
			document.getElementById("header1").innerHTML="Защита растений(ЗР)";
		    document.getElementById("body1").innerHTML="<p>Кафедры факултетов:</p> <p>Факултет</p> <p>Факультет</p>";
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Агрохимии и защиты растений</p> <p>Военный учебный центр</p> <p>Центр довузовской подготовки</p> ";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "meh"){
			document.getElementById("header1").innerHTML="Здание учебного корпуса механизации(МХ)<br>The building of the mechanization training building ";
		    document.getElementById("body1").innerHTML="<h3>Кафедры:<br>Departments:</h3> <p>Кафедра механизации животноводства и безопасности жизнедеятельности<br>Department of Animal Husbandry Mechanization and Life Safety</p><p>Кафедра процессы и машины в агробизнесе<br>Department of Processes and Machines in Agribusiness</p> <p>Кафедра ремонта машин и материаловедения<br>Department of repair of machinery and material science</p><p>Кафедра тракторов, автомобилей и технической механики<br>Department of Tractors, Automobiles and Technical Mechanics</p><p>Кафедра эксплуатации МТП<br>ICC Department of Operations</p>";
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет механизации<br>Faculty of Mechanization</p> ";
			popup.style.display = "block";
		}
        if (intersects[ i ].object.name == "hydro"){
			document.getElementById("header1").innerHTML="Здание учебного корпуса гидромелиорации (ГД)<br>The education building of the Hydromelioration ";
		    document.getElementById("body1").innerHTML="<h3>Кафедры:<br>Departments:</h3> <p>Кафедра гидромелиорации<br> Department of Hydromelioration</p><p>Кафедра гидравлики и сельскохозяйственного водоснабжения<br> Department of Hydraulics and Agricultural Water Supply</p><p>Кафедра комплексных систем водоснабжения<br> Department of Integrated Water Supply Systems</p><p>Кафедра сопротивления материалов<br> Department of Material Resistance</p><p>Кафедра строительства и эксплуатации водохозяйственных объектов<br> Department of Construction and Operation of Water Management Facilities</p><p>Кафедра архитектуры<br> Department of Architecture</p><p>Кафедра начертательной геометрии и графики<br> Department of Descriptive Geometry and Graphics</p>";
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет гидромелиорации<br> Faculty of Hydromelioration</p> <p>Архитектурно-строительный факультет<br> Faculty of Architecture and Civil Engineering</p><p>Землеустроительный факультет<br> Land Management Faculty</p>  ";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "glavniy"){
			document.getElementById("header1").innerHTML="Здание главного учебного корпуса(ГЛ)<br> The main educational building";
		    document.getElementById("body1").innerHTML="<h3>Кафедры:<br>Departments:</h3> <p>Кафедра административного и финансового права<br> Department of Administrative and Financial Law </p> <p>Кафедра государственного и международного права<br> Department of State and International Law</p><p>Кафедра международного частного и предпринимательского права<br> Department of International Private and Business Law</p><p>Кафедра уголовного права<br> Criminal Law Department </p><p>Кафедра технологии хранения и переработки животноводческой продукции<br> Department of Storage and Processing Technology of Livestock Products</p><p>Кафедра технологии хранения и переработки растениеводческой продукции<br> Department of Storage and Processing Technology of Livestock Products</p><p>Кафедра социологии и культурологии<br> Department of Sociology and Cultural Studies </p>";
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Юридический факультет<br> Faculty of Law </p><p>Факультет плодоовощеводства и виноградорства<br> Faculty of Horticulture and Viticulture</p><p>Факультет перерабатывающих технологий<br> Faculty of Processing Technologies </p><p>Факультет агрономии и экологии<br> Faculty of Agronomy and Ecology</p>";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob1"){
			document.getElementById("header1").innerHTML="Общежите №1<br>Dormitory №1";
		    document.getElementById("body1").innerHTML="<p>Управление по воспитательной работе<br>Department of educational work</p> <p>Центр информационных технологий(ЦИТ)<br>Information Technology Center</p> <p>Пункт полиции <br>Police point</p>";
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Военный учебный центр<br>Military education center</p>";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob2"){
			document.getElementById("header1").innerHTML="Общежите №2<br>Dormitory №2";
		    document.getElementById("body1").innerHTML="<p>Поликлиника<br>Policlinic</p>"
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет гидромелиорации<br>Faculty of Hydromelioration</p>";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob3"){
			document.getElementById("header1").innerHTML="Общежите №3<br>Dormitory №3";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет зоотехнии<br>Faculty of Zootechnics</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob4"){
			document.getElementById("header1").innerHTML="Общежите №4<br>Dormitory №4";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Учетно-финансовый факультет<br>Faculty of Accounting and Finance</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob5"){
			document.getElementById("header1").innerHTML="Общежите №5<br>Dormitory №5";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет агрономии и экологии<br>Faculty of Agronomy and Ecology</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob6"){
			document.getElementById("header1").innerHTML="Общежите №6<br>Dormitory №6";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Учетно-финансовый факультет<br>Faculty of Accounting and Finance</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob7"){
			document.getElementById("header1").innerHTML="Общежите №7<br>Dormitory №7";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Экономический факультет<br>Faculty of Economics</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob8"){
			document.getElementById("header1").innerHTML="Общежите №8<br>Dormitory №8";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Юридический факультет <br>Faculty of Law</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob10"){
			document.getElementById("header1").innerHTML="Общежите №10<br>Dormitory №10<br><br>Общежите №11<br>Dormitory №11";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Экономический факультет<br>Faculty of Economics</p><p>Юридический факультет <br>Faculty of Law</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob9"){
			document.getElementById("header1").innerHTML="Общежите №9<br>Dormitory №9<br><br>Общежите №14<br>Dormitory №14";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет ветеринарной медицины<br>Faculty of Veterinary Medicine</p> <p>Факультет агрохимии и защиты растений <br>Faculty of Agrochemistry and Plant Protection </p>";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob12"){
			document.getElementById("header1").innerHTML="Общежите №12<br>Dormitory №12<br><br>Общежите №13<br>Dormitory №13";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет механизации<br>Faculty of Mechanization</p><p>Землеустроительный факультет<br>Land Management Faculty</p> <p>Факультет агрономии и экологии<br>Faculty of Agronomy and Ecology</p>";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob15"){
			document.getElementById("header1").innerHTML="Общежите №15<br>Dormitory №15<br><br>Общежите №16<br>Dormitory №16";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет энергентики<br>Faculty of Energetics</p> <p>Архитектурно-строительный факультет<br>Faculty of Architecture and Civil Engineering</p>";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob18"){
			document.getElementById("header1").innerHTML="Общежите №18<br>Dormitory №18";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет финансов и кредита<br>Faculty of Finance and Credit</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob19"){
			document.getElementById("header1").innerHTML="Общежите №19<br>Dormitory №19";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет управления<br>Management Faculty</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob20"){
			document.getElementById("header1").innerHTML="Общежите №20<br>Dormitory №20";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет прикладной информатики<br>Faculty of Applied Informatics</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "ob17"){
			document.getElementById("header1").innerHTML="Общежите №17<br>Dormitory №17";
		    document.getElementById("body1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Факультет перерабатывающих технологий<br>Faculty of Processing Technologies</p> ";
			document.getElementById("footer1").innerHTML="";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "vetfak"){
			document.getElementById("header1").innerHTML="Факультет ветеринарной медицины";
		    document.getElementById("body1").innerHTML="<p>Факултеты:</p> <p>Факультет</p> <p>Факультет</p>";
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties:</h3> <p>Механизации</p> <p>Факультет</p> <p>факультет</p> ";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "sport"){
			document.getElementById("header1").innerHTML="<p>Спортивный комплекс(СПОРТ)<br>Sports complex</p>";
		    document.getElementById("body1").innerHTML="<h3>Кафедры:<br>Departments:</h3> <p>Кафедра физического воспитания<br>Physical education department</p>" ;
			document.getElementById("footer1").innerHTML="<h3>Бассеин<br>Swimming pool</h3>";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "stadion"){
			document.getElementById("header1").innerHTML="Стадион";
		    document.getElementById("body1").innerHTML="<p>Факултеты:</p> <p>Факультет</p> <p>Факультет</p>";
			document.getElementById("footer1").innerHTML="<h3>Деканаты:</h3> <p>Механизации</p> <p>Факультет</p> <p>факультет</p> ";
			popup.style.display = "block";
		}
		if (intersects[ i ].object.name == "zoo"){
			document.getElementById("header1").innerHTML="Здание учебного корпуса зоотехнии(ЗОО)<br> The building of the educational building of zootechnics";
		    document.getElementById("body1").innerHTML="<h3>Кафедры:<br>Departments:</h3> <p>Разведение сельскохозяйственных животных и зоотехнологий <br>Breeding of farm animals and zootechnologies</p><p>Кафедра физиологии и кормления сельскохозяйственных животных <br>Department of Physiology and Feeding of Agricultural Animals</p> <p>Кафедра денежного обращения и кредита <br>Department of Monetary circulation and credit</p><p>Кафедра финансов </br>Finance Department</p><p>Кафедра экономики предприятия </br>Department of Enterprise Economics</p>";
			document.getElementById("footer1").innerHTML="<h3>Факультеты:<br>Faculties</h3> <p>Факультет зоотехнии<br>Faculty of Zootechnics</p> <p>Факультет финансов и кредита<br>Faculty of Finance and Credit</p><p>Факультет общественных профессий<br>Faculty of Social Professions</p> ";
			popup.style.display = "block";
		}
    }

}	


function searching(){
	var stroka = document.getElementById("polevvoda").value;
	var stgl = "Главный гл";
	if (stgl.match(stroka)) {
		controls.target.set(18.053630433211154,-2.8, 3.529055334349051);
		camera.position.set(49.11349277113446, 32.90998355718365, 34.50000200606435);
		camera.rotation.set(-0.8790626837447995,0.6100247134160566, 0.6051205469400369);
	}
}

init();