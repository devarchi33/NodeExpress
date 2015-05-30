/**
 * New node file
 */
/**
 * New node file
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test'); // 포트번호(27017) 생략가능

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema= new Schema({
	_id: String,
	name: String,
	/*phone: String,*/
	age: Number }, { versionKey:false} /*__v 버전키 필드제거 */
);

//module.exports = mongoose.model('User', userSchema);
// 생성자함수 이므로 대문자 권장
var User = mongoose.model('Users', userSchema); // 'User 단수형를 이름은 내부적으로 복수형으로 사용됨

// Users 컬렉션에서 가져오기
User.find ( function (err, users) {
	  if (err){ return console.error(err);}
	  console.log(users);
});

/*
 //Users 컬렉션에 저장할 모델 인스턴스 생성
var newUser = new User({
	_id:'usr03', name:'ward', phone:'010-658-3646', age:30
});

// 모델 인스턴스의 속성을 Users 컬렉션에 저장
newUser.save(function(err, newUser){
	if (err) { return console.error(err); }
	  console.log(newUser);
}); */

/*
//Find a single User by name.
User.findOne({ name: 'ward' }, function(err, scott) {
  if (err) { return console.error(err); }
  console.log(scott);
}); */

/*
// Update 1
User.update( {_id:'usr01'}, {$set:{name:'king'}}, {upsert:true}, function(err, doc){
	if(err) { return console.error('Failed to update'); }
	console.log('Update Success');
});
*/

/*
// findOneAndUpdate
User.findOneAndUpdate ( {_id:'usr03'}, {$set:{name:'king', age:50} }, {upsert:true}, function(err, doc){
	if(err) { return console.error('Failed to update'); }
	console.log('Update Success');
}); */

/*
// 삭제
User.findByIdAndRemove('usr03', function(err){
	if(err) { return console.error(err); }
	console.log('Remove Success');
});*/