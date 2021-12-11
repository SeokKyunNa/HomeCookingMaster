/** @jsxImportSource @emotion/react */
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { aboutDiv, section, sectionDiv,section1,sectionImg,sectionOne,introDiv } from "../../css/about_css";
import { Fade } from "react-awesome-reveal";
import avatar from '../../assets/avatar.png';
import logo from '../../assets/hcmk_logo.png';
import ex11 from '../../assets/ex11.png';
import ex12 from '../../assets/ex12.png';
import ex13 from '../../assets/ex13.png';
import review from '../../assets/review.png';
import mypage from '../../assets/mypage.png';

function AboutPage() {
    return (
        <div css={aboutDiv}>
            <section css={sectionImg}>
                <h1>집밥꼬꼬선생</h1>
                <p>집밥 레시피 검색 플랫폼</p>
            </section>
            <section css={sectionOne}>
                <Fade>
                        {/* <h1 style={{fontFamily:'EliceBold'}}>집밥꼬꼬선생</h1> */}
                        <img src={logo} alt="logo" width="400"></img>
                        <p>AI 이미지 처리 기능을 활용해<br/> 이미지로 집밥 레시피를 검색할 수 있는 웹 서비스</p>
                        <h1 style={{fontWeight:'600', marginTop:'2rem'}}>AI 기술을 활용한 이미지 검색</h1>
                        <p>먹고 싶은 음식 사진을 발견해 <br/>당장 만들어 먹고싶다면 <br/>집밥꼬꼬선생을 이용하여 사진으로 레시피를 검색하세요!</p>
                </Fade>
            </section>
            <section css={sectionOne}>
                <Fade>
                    <img src={avatar} alt="avatar" style={{marginTop:'2rem'}}></img>
                    <h2 style={{fontFamily:'EliceBold'}}>왜 집밥 꼬꼬 선생인가요?</h2>
                    <p >요리에 서툰 사회 초년생을 병아리에 비유하여<br/> 꼬꼬 선생이 이들에게 레시피를 전달해주는 서비스입니다.</p>
                </Fade>
            </section>
            <section css={sectionOne} >
                <Fade>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={{display:'flex', flexDirection:'column', marginRight:'2.5%', marginTop:'5rem'}}>
                            <h1 style={{fontFamily:'EliceBold'}}>다양한 음식 레시피 보유</h1>
                            <p>총 400가지의 집밥 메뉴와 <br/>약 1900개의 레시피 데이터를 보유하고 있어 <br/>다양한 음식을 만들 수 있습니다.</p>
                        </div>
                        <Box sx={{ width: 500, height: 450, marginLeft:'2.5%' }}>
                            <ImageList variant="masonry" cols={3} gap={8}>
                                <ImageListItem key={ex11}>
                                    <img
                                    src={`${ex11}?w=248&fit=crop&auto=format`}
                                    srcSet={`${ex11}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt="ex11"
                                    loading="lazy"
                                    style={{height:'15rem',width:'15rem', borderRadius:'15px', boxShadow:'2px 2px 6px gray'}}
                                    />
                                </ImageListItem>
                                <ImageListItem key={ex12}>
                                    <img
                                    src={`${ex12}?w=248&fit=crop&auto=format`}
                                    srcSet={`${ex12}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt="ex11"
                                    loading="lazy"
                                    style={{height:'15rem',width:'15rem', borderRadius:'15px',boxShadow:'2px 2px 6px gray'}}
                                    />
                                </ImageListItem>
                                <ImageListItem key={ex13}>
                                    <img
                                    src={`${ex13}?w=248&fit=crop&auto=format`}
                                    srcSet={`${ex13}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt="ex11"
                                    loading="lazy"
                                    style={{height:'20rem',width:'15rem',marginLeft:'5rem', marginTop:'3rem' , borderRadius:'15px',boxShadow:'2px 2px 6px gray'}}
                                    />
                                </ImageListItem>
                            </ImageList>
                            </Box>
                    </div>
                </Fade>
            </section>
            <section css={sectionOne}>
                <Fade>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <img src={review} alt="review" style={{height:'30rem',width:'30rem', marginRight:'2.5%', borderRadius:'15px', boxShadow:'2px 2px 6px gray'}}></img>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'5rem', marginLeft:'2.5%', width:'100%'}}>
                            <h1 style={{fontFamily:'EliceBold'}}>사용자들의 생생한 리뷰</h1>
                            <p>레시피만으로는 알 수 없는 후기와 꿀팁 공유</p>
                        </div>
                    </div>
                </Fade>
            </section>
            <section css={sectionOne}>
                <Fade>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={{display:'flex', flexDirection:'column', marginTop:'5rem', width:'100%', marginRight:'2.5%'}}>
                            <h1 style={{fontFamily:'EliceBold'}}>마이페이지를 활용한 리뷰 및<br/> 스크랩 레시피 관리</h1>
                            <p>좋아요 한 레시피와 댓글을 단 레시피를<br/> 마이페이지에서 손 쉽게 확인할 수 있습니다.</p>
                        </div>
                        <img src={mypage} alt="mypage" style={{height:'30rem',width:'30rem', borderRadius:'15px', boxShadow:'2px 2px 6px gray', marginLeft:'2.5%'}}></img>
                    </div>
                </Fade>
            </section>
        </div>
    );
}

export default AboutPage;




// style={{width:'30%', height:'40%'}}
// {/* <Box sx={{ width: "100vw", margin: "auto 0" }}>
//                 <Typography
//                     sx={{
//                         fontSize: "1.75rem",
//                         color: "#897A5F",
//                         fontFamily: "Elice",
//                         textAlign: "center",
//                         padding: "35% 0"
//                     }}
//                 >
//                     준비중입니다!
//                 </Typography>
//             </Box>   */}
