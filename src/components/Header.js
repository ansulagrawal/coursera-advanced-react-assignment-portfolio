import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Box, Button, HStack, Link, Text } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ansulagrawal9@gmail.com",
    name: "mail",
  },
  {
    icon: faGithub,
    url: "https://github.com/ansulagrawal",
    name: "github",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ansulagrawal/",
    name: "linkedin",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    name: "medium",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/18464790/coder",
    name: "stackoverflow",
  },
];

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY.current < currentScrollY && !isHidden) {
        setIsHidden(true);
      } else if (prevScrollY.current > currentScrollY && isHidden) {
        setIsHidden(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  const handleClick = (event, anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      transform={isHidden ? "translateY(-60px)" : "translateY(0)"}
      style={{ zIndex: 999 }}>
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing="24px">
              {socials.map(social => (
                <MenuItem to={social.url} key={social.name}>
                  <FontAwesomeIcon icon={social.icon} />
                </MenuItem>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing="24px">
              <Link href="#projects" onClick={event => handleClick(event, "projects")}>
                Projects
              </Link>
              <Link href="#contact-me" onClick={event => handleClick(event, "contactme")}>
                Projects
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
