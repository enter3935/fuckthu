angular.module("horror", [])
    .controller("HorrorController", function($scope, $http){
        var horror = this;
        horror.showCount = 10;
        $.getJSON("data.json", function(data) {
            horror.data = data;
            setTimeout(function(){
                $("#message").replaceWith("<div id='message'><p style='text-align:center' class='animated fadeIn'>施工中</p></div>");
                setTimeout(function(){
                    $("#message").remove();
                    $scope.$apply();
                    $("#info").show();
                    $("#info").addClass("animated fadeIn");
                    $(".center").append('<p style="text-align: center; font-size: 16px" class="animated fadeIn">本網站已停止更新 最新排名請至<a href="http://fbstats.info/867704779984689">http://fbstats.info/867704779984689</a><br>Made by <a href="https://goo.gl/7FSJVN" target="_blank">銀行汽車貸款＿吳先生</a></p>');
                    $(".page").show();
                    $("#pageOne").append('<div class="animated fadeIn" id="downMessage" style="position: absolute; left: 50%; bottom:0; padding: 10px 10px 10px 10px;"><div style="position: relative; left: -50%; text-align:center">下拉查看排名<br><i class="fa fa-chevron-down"></i></div></div>')
                }, 1500);
            }, 2000);
	     $("#t1").append('<label class="col-md-4 control-label" for="topic">靠北東海＃</label> <div class="col-md-5"><input type="text"   name="topic" placeholder="文章編號" class="form-control input-md"/><div><button type="submit" name="submit" class="btn btn-primary btn-sm"/>送出</button><br></div>');
        });

        horror.showMore = function(scope, el, attrs) {
            horror.showCount = horror.showCount + 10;
            if (horror.showCount > 200)
                $("#showMoreButton").hide();
        };

        horror.sortByLike = function() {
            $("#sortByLikeButton").addClass("active");
            $("#sortByCommentButton").removeClass("active");
            horror.data.posts.sort(function(a,b){
                return parseFloat(b.likes.summary.total_count) - parseFloat(a.likes.summary.total_count);
            });
        };

        horror.sortByComment = function() {
            $("#sortByLikeButton").removeClass("active");
            $("#sortByCommentButton").addClass("active");
            horror.data.posts.sort(function(a,b){
                return parseFloat(b.comments.summary.total_count) - parseFloat(a.comments.summary.total_count);
            });
        };
	horror.bj = function(){
	$("#t1").append('<label class="col-md-4 control-label" for="topic">靠北東海＃</label> <div class="col-md-5"><input type="text"   name="topic" placeholder="文章編號" class="form-control input-md"/><div><button type="submit" name="submit" class="btn btn-primary btn-sm"/>送出</button><br></div>');
	
	}
    });
$(document).ready(function(){
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 5){
            $("#downMessage").removeClass("animated fadeIn");
            $("#downMessage").addClass("animated fadeOut");
        } else {
            $("#downMessage").removeClass("animated fadeOut");
            $("#downMessage").addClass("animated fadeIn");
        }
    });
});
