/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import Dropzone from "react-dropzone";
import { Box, Typography } from "@mui/material";
import { getImgResult } from "../../modules/searchByImageSlice";
import { setSearchImg } from "../../modules/userSearchImg";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function DropZone() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDrop = (acceptedFiles: any) => {
        const formData = new FormData();
        formData.append("img", acceptedFiles[0]);

        /**
         * 업로드한 이미지파일을 formData에 넣고
         * searchByImageSlice에서 post 요청을 보냄
         */
        dispatch(getImgResult(formData));
        
        /** 업로드한 이미지파일을 검색결과 페이지에서 보여주기 위해
         * userSearchImg로 보냄
         */
        dispatch(setSearchImg(acceptedFiles[0]));
    };
    
    const imgResult = useSelector((state:RootStateOrAny) => state.getResultByImg.list)

    useEffect(() => {
        if (imgResult) {
            const rateResult = imgResult["equal_rate"];
            
            if (
                typeof rateResult == "undefined" ||
                rateResult == null ||
                rateResult === ""
            ) {
                // console.log("<rateResult> : empty")
            } else {
                if (rateResult[0]["rate"] > 0.7) {
                    const result = rateResult[0]["name"];
                    navigate(`/result?data=${result}`);
                } else {
                    navigate("/result");
                }
            }
        } else {
            // console.log("<imgResult> : imgResult empty")
        }
    }, [imgResult]);

    return (
        <Box>
            <Box
                sx={{
                    border: "1px dashed black",
                    width: "80%",
                    height: "30vh",
                    textAlign: "center",
                    margin: "0 auto",
                    backgroundColor: "lightgray",
                    opacity: 0.5,
                }}
            >
                <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <section {...getRootProps()} style={{ height: "100%", display: "table", margin: "auto" }}>
                            <input {...getInputProps()} />
                            <Box sx={{ display: "table-cell", verticalAlign: "middle" }}>
                                <AddPhotoAlternateIcon sx={{ fontSize: "60px" }} />
                                <Typography sx={{ fontFamily: "Elice" }}>
                                    드래그 앤 드롭으로 이미지 파일을 추가하세요.
                                </Typography>
                            </Box>
                        </section>
                    )}
                </Dropzone>
            </Box>
            <Box
                sx={{
                    textAlign: "center",
                    margin: "0 auto",
                    marginTop: "2%",
                }}
            >
                <Typography sx={{ fontFamily: "Elice" }}>
                    이미지 업로드시 바로 검색됩니다.
                </Typography>
            </Box>
        </Box>
    );
}

export default DropZone;
