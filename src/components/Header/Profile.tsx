import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>João Cardoso</Text>
          <Text color="gray.300" font-size="smaill">
            João@gmail.com
          </Text>
        </Box>

        <Avatar
          size="md"
          name="João Cardoso"
          src="https://avatars.githubusercontent.com/u/33937520?v=4"
        />
      </Flex>
    );
}