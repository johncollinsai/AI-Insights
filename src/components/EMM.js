import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Box, Typography, Fade, Link, Chip } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const EMM = () => {
  const neonGlowAnimation = keyframes`
    0% {
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    }
    50% {
      text-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
    }
    100% {
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    }
  `;

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <div>
          <Helmet>
            <title>Evolutionary Model Merge</title>
            <meta name="description" content="Evolving New Foundation Models: Unleashing the Power of Automating Model Development." />
            <meta property="og:title" content="Evolutionary Model Merge" />
            <meta property="og:description" content="Evolving New Foundation Models: Unleashing the Power of Automating Model Development." />
            <meta property="og:url" content="https://deepvertical.ai/insights/emm" />
            <meta property="og:image" content="/static/images/insight2.png" />
          </Helmet>
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(45deg, #121212, #2E8B57)',
              color: 'common.white',
              py: 8,
              px: 4,
            }}
          >
            <Fade in timeout={500}>
              <Chip
                label="Last Updated: 29 March 2024"
                sx={{
                  mb: 4,
                  px: 2,
                  py: 1,
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  borderRadius: '24px',
                  background: 'linear-gradient(45deg, #00FF00, #32CD32)',
                  color: '#000',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.8)',
                  animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                }}
              />
            </Fade>
            <Fade in timeout={1000}>
              <Typography
                variant="h2"
                component="h1"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                  background: 'linear-gradient(45deg, #00FF00, #32CD32)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Evolutionary Model Merge (EMM)
              </Typography>
            </Fade>
            <Fade in timeout={1500}>
              <Box
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 30px rgba(0, 255, 0, 0.2)',
                  border: '1px solid rgba(0, 255, 0, 0.3)',
                  p: 4,
                  mb: 8,
                }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    mb: 4,
                    color: '#00FF00',
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                  }}
                >
                  Unlocking business potential: Why you need to look at EMM
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                  }}
                >
                  The Evolutionary Model Merge (EMM) method is a groundbreaking development that offers a systematic, efficient, and innovative approach to leveraging the landscape of existing models. By enabling the creation of models that transcend traditional domain boundaries and optimize on multiple dimensions, EMM paves the way for AI systems that are not only more powerful and versatile but also more aligned with complex real-world applications.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                  }}
                >
                  One of the key reasons we like EMM is its ability to automatically discover novel ways to merge different models from vastly different domains, such as non-English language and Math, or non-English language and Vision, in non-trivial ways that might be difficult for human experts to discover themselves. This automation of model development not only saves time and resources but also opens up new possibilities for creating highly specialized and efficient models tailored to specific use cases.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                  }}
                >
                  Another significant advantage of EMM is its ability to produce state-of-the-art models without the need for costly gradient-based training. By leveraging the collective intelligence of existing open models, EMM can evolve high-performance foundation models with relatively little compute resources. This challenges the current paradigm of expensive model development and makes advanced AI capabilities more accessible to a wider range of organizations and researchers.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                  }}
                >
                  We will be closely examining EMM in the coming days and weeks, and this Insight will be enhanced with our practical insights as they become available. We believe that EMM represents a significant step forward in the field of AI, and we are excited to explore its potential for creating powerful, versatile, and efficient models that can tackle complex real-world challenges.
                </Typography>

                <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      mt: 4,
                    }}
                  >
                    <Link
                      // href="/contact"
                      href="mailto:john@deepvertical.ai" 
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#00ffff',
                        textDecoration: 'none',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        '&:hover': {
                          color: '#7fffd4',
                        },
                      }}
                    >
                      Contact us to discuss how you can leverage EMM{' '}
                      <Box
                        component="span"
                        sx={{
                          ml: 1,
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                        }}
                      >
                        →
                      </Box>
                    </Link>
                  </Box> 

              </Box>
            </Fade>

            <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
              <Fade in timeout={2000}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 255, 0, 0.2)',
                    border: '1px solid rgba(0, 255, 0, 0.3)',
                    p: 4,
                    mb: 6,
                  }}
                >
                  <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      mb: 4,
                      color: '#00FF00',
                      animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    }}
                  >
                    Business Applications of Evolutionary Model Merge
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      mb: 4,
                      animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                    }}
                  >
                    [Placeholder for real-life business application of EMM - coming soon!]
                  </Typography>
                </Box>
              </Fade>

              <Fade in timeout={3000}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 255, 0, 0.2)',
                    border: '1px solid rgba(0, 255, 0, 0.3)',
                    p: 4,
                    mb: 6,
                  }}
                >
                  <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      mb: 4,
                      color: '#00FF00',
                      animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    }}
                  >
                    What is Evolutionary Model Merge (EMM)?
                  </Typography>
                  <Fade in timeout={3500}>
                    <Typography
                      variant="h5"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00FF00',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Evolving New Foundation Models: Unleashing the Power of Automating Model Development
                    </Typography>
                  </Fade>
                  <Fade in timeout={4000}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                      }}
                    >
                      The core research focus of Sakana AI is in applying nature-inspired ideas, such as evolution and collective intelligence, to create new foundation models. We are currently developing technology that makes use of evolution with the goal of automating the development of foundation models with particular abilities suitable for user-specified application domains. Our goal isn't to just train any particular individual model. We want to create the machinery to automatically generate foundation models for us!
                    </Typography>
                  </Fade>
                  <Fade in timeout={4500}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                      }}
                    >
                      As a first step towards this goal, we're excited to release our report, Evolutionary Optimization of Model Merging Recipes. In this release, we introduce Evolutionary Model Merge, a general method that uses evolutionary techniques to efficiently discover the best ways to combine different models from the vast ocean of different open-source models with diverse capabilities. As of writing, Hugging Face has over 500k models in dozens of different modalities that, in principle, could be combined to form new models with new capabilities! By working with the vast collective intelligence of existing open models, our method is able to automatically create new foundation models with desired capabilities specified by the user.
                    </Typography>
                  </Fade>
                  <Fade in timeout={5000}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                      }}
                    >
                      We find that our approach is able to automatically discover novel ways to merge different models from vastly different domains (like non-English language and Math, or non-English language and Vision), in non-trivial ways that might be difficult for human experts to discover themselves. To test our approach, we initially tested our method to automatically evolve for us a Japanese Large Language Model (LLM) capable of Math reasoning, and a Japanese Vision-Language Model (VLM).
                    </Typography>
                  </Fade>
                  <Fade in timeout={5500}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                      }}
                    >
                      Surprisingly, we find that both models achieve state-of-the-art results on several LLM and Vision benchmarks, while not being explicitly optimized to be good at these benchmarks! In particular, our evolved Japanese Math LLM, a 7B parameter model, to our surprise, achieved the top performance on a vast array of other Japanese LLM benchmarks, even exceeding the performance of some previous SOTA 70B parameter Japanese LLMs! We believe our experimental Japanese Math LLM is good enough to be a general purpose Japanese LLM.
                    </Typography>
                  </Fade>
                  <Fade in timeout={6000}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                      }}
                    >
                      Our evolved Japanese VLM is able to handle culturally-specific content remarkably well, and also achieves top results when tested on a Japan-sourced dataset of Japanese image-description pairs. We find our method extends to Image Generation Diffusion Models as well, where we were able to evolve a high quality, lightning fast, 4-diffusion-step Japanese-capable SDXL model.
                    </Typography>
                  </Fade>
                  <Fade in timeout={6500}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                      }}
                    >
                      In the end, we applied this method to evolve 3 powerful foundation models for Japan: a Large Language Model (EvoLLM-JP), a Vision-Language Model (EvoVLM-JP), and an Image Generation Model (EvoSDXL-JP). We are excited to release 2 state-of-the-art Japanese foundation models, EvoLLM-JP and EvoVLM-JP, on Hugging Face and GitHub (with EvoSDXL-JP coming up), with the aim of effectively accelerating the development of nature-inspired AI in Japan!
                    </Typography>
                  </Fade>
                  <Fade in timeout={7000}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 8,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                      }}
                    >
                      As researchers, we are surprised that our method is able to automatically produce new foundation models without the need for any gradient-based training, thus requiring relatively little compute resources. In principle, we can employ gradient-based backpropagation to further improve performance, but the point of this release is to show that even without backprop, we can still evolve state-of-the-art foundation models, challenging the current paradigm of costly model development.
                    </Typography>
                  </Fade>

                  <Fade in timeout={7500}>
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00FF00',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      References
                    </Typography>
                  </Fade>

                  <Fade in timeout={8000}>
                    <Box>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 2,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                        }}
                      >
                        <Link href="https://arxiv.org/pdf/2403.13187.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: '#00FF00' }}>
                          Paper
                        </Link>
                      </Typography>
                      <Typography              variant="body1"
                        paragraph
                        sx={{
                          mb: 2,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                        }}
                      >
                        <Link href="https://github.com/SakanaAI" target="_blank" rel="noopener noreferrer" sx={{ color: '#00FF00' }}>
                          GitHub
                        </Link>
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 2,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                        }}
                      >
                        <Link href="https://huggingface.co/SakanaAI" target="_blank" rel="noopener noreferrer" sx={{ color: '#00FF00' }}>
                          Hugging Face
                        </Link>
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 2,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                        }}
                      >
                        <Link href="https://sakana.ai/" target="_blank" rel="noopener noreferrer" sx={{ color: '#00FF00' }}>
                          Website
                        </Link>
                      </Typography>
                    </Box>
                  </Fade>

                </Box>
              </Fade>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default EMM;