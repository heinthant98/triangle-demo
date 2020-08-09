import React, { useEffect } from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => alert(`Submitted Value: ${JSON.stringify(data, null, 4)}`);

  const isEmptyMessage = "入力してください。";
  const patternZeroToOneHundred = /^[1-9]$|^[1-9][0-9]$/;
  const isNotZeroToOneHundred = "1から9の整数を半角数字で入力してください。";

  return (
    <div>
      <section id="form">
        <div className="container">
          <div className="panel-primary">
            <div className="panel-primary__heading">
              <h4>三角形問題フォーム</h4>
            </div>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="col-md-4 control-label"><span className="notice">*</span>A辺の長さ</label>
                <div className="col-md-4">
                  <input
                    id="length_a"
                    name="length_a"
                    ref={
                      register({
                        required: isEmptyMessage,
                        pattern: {
                          value: patternZeroToOneHundred,
                          message: isNotZeroToOneHundred
                        }
                      })
                    }
                    placeholder="整数2桁までの数字"
                    size="60" type="text" />
                  <span className="error">
                    <ErrorMessage errors={errors} name="length_a" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 control-label"><span className="notice">*</span>B辺の長さ</label>
                <div className="col-md-4">
                  <input
                    id="length_b"
                    name="length_b"
                    ref={
                      register({
                        required: isEmptyMessage,
                        pattern: {
                          value: patternZeroToOneHundred,
                          message: isNotZeroToOneHundred
                        }
                      })
                    }
                    placeholder="整数2桁までの数字"
                    size="60" type="text" />
                  <span className="error">
                    <ErrorMessage errors={errors} name="length_b" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 control-label"><span className="notice">*</span>C辺の長さ</label>
                <div className="col-md-4">
                  <input
                    id="length_c"
                    name="length_c"
                    ref={
                      register({
                        required: isEmptyMessage,
                        pattern: {
                          value: patternZeroToOneHundred,
                          message: isNotZeroToOneHundred
                        }
                      })
                    }
                    placeholder="整数2桁までの数字"
                    size="60" type="text" />
                  <span className="error">
                    <ErrorMessage errors={errors} name="length_c" />
                  </span>
                </div>
              </div>
              <div className="panel-footer">
                <input type="submit" name="submitConfirm" value="送信内容を確認する" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}