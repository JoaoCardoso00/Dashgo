import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Cardoso</Text>
          <Text color="gray.300" font-size="smaill">
            João@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="João Cardoso"
        src="https://avatars.githubusercontent.com/u/33937520?v=4"
      />
    </Flex>
  );
}
