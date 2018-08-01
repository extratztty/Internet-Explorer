import React from 'react'

let Model = React.createClass({
    render(){
        return(
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <form className="modal-content" action="" method="get">
                        <div className="modal-header">
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">留言板</h4>
                        </div>
                        <div className="modal-body">
                            <textarea className="form-control" rows="3" name="" placeholder="请在此写出您对我们的建议"> </textarea>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-default" type="button" data-dismiss="modal">关闭</button>
                            <button className="btn btn-primary disabled" type="submit">提交</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

export default Model;